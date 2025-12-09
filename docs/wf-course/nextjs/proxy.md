# Proxy

Een proxy is een soort `middleware` functie die verzoeken onderschept voordat ze worden afgehandeld door de eigenlijke route-handler. Dit kan nuttig zijn voor verschillende doeleinden, zoals authenticatie, logging, of het wijzigen van verzoeken en antwoorden.

We gaan in dit hoofdstuk een eenvoudige proxy implementeren om authenticatie toe te voegen aan onze Next.js applicatie. We zullen een proxy maken die controleert of een gebruiker is ingelogd voordat ze toegang krijgen tot bepaalde routes. We gaan hier gebruik maken van JSON Web Tokens (JWT) voor authenticatie.

## De proxy implementeren

Om een proxy te implementeren in Next.js, maken we een bestand genaamd `proxy.ts` in de root van onze applicatie. In dit bestand zullen we de logica schrijven om te controleren of een gebruiker is ingelogd.

In `proxy.ts` kunnen we de volgende code toevoegen:

```typescript
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
 
export async function proxy(request: NextRequest) {
    return NextResponse.next();
}

export const config = {
  matcher: ["/","/dashboard"],
}
```

Momenteel staat de proxy alleen maar toe dat alle verzoeken doorgaan. De matcher zorgt ervoor dat de proxy alleen wordt toegepast op de routes `/` en `/dashboard`. Dit wil zeggen dat we alleen authenticatie gaan afdwingen op deze routes.

Voor authenticatie gaan we gebruik maken van JWT tokens die we opslaan in een http-only cookie. We gaan de proxy aanpassen om te controleren of deze cookie aanwezig is en geldig is. Hiervoor installeren we eerst de `jsonwebtoken` package:

```bash
npm install jsonwebtoken
```

Nu kunnen we de proxy aanpassen om de JWT te verifiëren:

```typescript
const cookieStore = await cookies();
const jwtCookie = cookieStore.get("jwt");

if (jwtCookie) {
    jwt.verify(jwtCookie.value, process.env.JWT_SECRET!, (err, decoded) => {
        if (err) return NextResponse.redirect(new URL("/auth/login", request.url));
        return NextResponse.next();
    });
} else {
    return NextResponse.redirect(new URL("/auth/login", request.url));
}
```

Je kan heel eenvoudig de cookies uitlezen met de `cookies` functie van Next.js. We proberen de JWT cookie op te halen en verifiëren deze met behulp van de `jsonwebtoken` package. Als de cookie geldig is, laten we het verzoek doorgaan met `NextResponse.next()`. Als de cookie ontbreekt of ongeldig is, wordt de gebruiker doorgestuurd naar de inlogpagina. Je moet ervoor zorgen dat je een geheim sleutel (`JWT_SECRET`) hebt ingesteld in je omgevingsvariabelen voor het verifiëren van de JWT.

## Auth Database functies

We hebben een functie nodig om gebruikers op te halen uit onze database. We maken een bestand `database/auth.ts` aan met de volgende inhoud:

```typescript
import { Collection, MongoClient } from "mongodb";
import { User } from "@/types";
import bcrypt from "bcrypt";

const client = new MongoClient(process.env.MONGODB_URI!);

export const userCollection: Collection<User> = client.db("auth-jwt").collection<User>("users");

const DUMMY_USERS: User[] = [
    {
        id: "1",
        email: "jon.doe@acme.com",
        name: "Jon Doe",
        avatar: "jon-doe.jpg",
        passwordHash: bcrypt.hashSync("password123", 10)
    },
    {
        id: "2",
        email: "alice.doe@acme.com",
        name: "Alice Doe",
        avatar: "alice-doe.jpg",
        passwordHash: bcrypt.hashSync("mypassword", 10)
    }
]

export const seedDummyUsers = async () => {
    const existingUsers = await userCollection.find({}).toArray();
    if (existingUsers.length === 0) {
        await userCollection.insertMany(DUMMY_USERS);
        console.log("Dummy users seeded to the database.");
    } else {
        console.log("Database already has users. Skipping seeding.");
    }
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    return await userCollection.findOne({ email });
}

export const createUser = async (user: User): Promise<void> => {
    await userCollection.insertOne(user);
}
```

Als je de `seedDummyUsers` functie wil aanroepen bij het opstarten van de applicatie, kun je dit doen in een apart bestand genaamd `instrumentation.ts`. Deze naam is misschien wat verwarrend, maar we gebruiken dit bestand om code uit te voeren bij het opstarten van de applicatie. Deze moet in de root van de applicatie staan:

```typescript
import { seedDummyUsers } from "@/database/auth";

 
export function register() {
  seedDummyUsers().catch(err => console.error("Error seeding dummy users:", err));
}
```

## Login Action aanmaken

We maken een bestand `actions/authActions.ts` aan om de login actie te verwerken. Hier is een voorbeeld van hoe je dit kunt implementeren:

```typescript
"use server";

import { validateEmail, validatePassword } from "@/utils/validation";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { findUserByEmail } from "@/database/auth";

interface LoginState {
    errors: {
        email: string[];
        password: string[];
        general: string[];
    };
    email: string;
    success: boolean;
}

export const login = async (prevState: LoginState, formData: FormData): Promise<LoginState> => {
    let email = formData.get("email")?.toString() ?? "";
    let password = formData.get("password")?.toString() ?? "";

    let emailErrors: string[] = validateEmail(email);
    let passwordErrors: string[] = validatePassword(password);

    if (emailErrors.length > 0 || passwordErrors.length > 0) {
        return {
            errors: {
                email: emailErrors,
                password: passwordErrors,
                general: []
            },
            email: email,
            success: false
        }
    }

    const user = await findUserByEmail(email);

    if (!user) {
        return {
            errors: {
                general: ["Invalid email or password"],
                email: [],
                password: []
            },
            email: email,
            success: false
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
        return {
            errors: {
                general: ["Invalid email or password"],
                email: [],
                password: []
            },
            email: email,            
            success: false
        }
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name,
            avatar: user.avatar
        },
        process.env.JWT_SECRET!,
        {
            expiresIn: "1h"
        }
    );

    const cookieStore = await cookies();

    cookieStore.set({
        name: "jwt",
        value: token,
        httpOnly: true,
        sameSite: "lax",
        secure: true,
    });

    redirect("/dashboard");

    return {
        success: true,
        email: email,
        errors: {
            email: [],
            password: [],
            general: []
        }
    }
}
```

We geven hier een `LoginState` interface mee om de status van de login actie bij te houden. De `login` functie valideert de invoer, controleert de gebruikersgegevens in de database, genereert een JWT token en stelt deze in als een http-only cookie. Als de login succesvol is, wordt de gebruiker doorgestuurd naar het dashboard. 

Hier onder een voorbeeld van hoe je de login actie kunt aanroepen vanuit een React component:

```tsx
"use client";

import { useActionState } from "react";
import { login } from "@/actions/authActions";

const LoginPage = () => {
  const [state, loginAction, pending] = useActionState(login, {
    success: false,
    email: "",
    errors: { email: [], password: [], general: [] },
  });

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 p-6 shadow-sm">
        
        <h1 className="mb-2 text-2xl font-bold">Login</h1>
        <p className="mb-6 text-sm text-gray-500">
          Enter your email below to login to your account
        </p>

        {state.errors.general.length > 0 && (
          <div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-600">
            {state.errors.general.join(", ")}
          </div>
        )}

        <form action={loginAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="m@example.com"
              defaultValue={state.email}
              className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 ${
                state.errors.email.length > 0
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {state.errors.email.map((error, index) => (
              <p key={index} className="mt-1 text-xs text-red-500">
                {error}
              </p>
            ))}
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 ${
                state.errors.password.length > 0
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {state.errors.password.map((error, index) => (
              <p key={index} className="mt-1 text-xs text-red-500">
                {error}
              </p>
            ))}
          </div>
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
```

## Opvragen van de gebruiker in het dashboard

In het dashboard kunnen we de gebruiker opvragen door de JWT token uit de cookie te lezen en te decoderen. Hier is een voorbeeld van hoe je dit kunt doen in de `dashboard/page.tsx`:

```tsx
import { getCurrentUser, logout } from "@/actions/authActions";
import Image from "next/image";

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="p-6">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        </div>
        <div className="flex flex-col items-center gap-6 p-6 pt-0">
          {user.avatar && (
            <div className="overflow-hidden rounded-full border border-gray-200">
                <Image
                src={`/${user.avatar}`}
                alt={user.name}
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-cover"
                />
            </div>
          )}
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900">Welcome, {user.name}!</p>
            <p className="text-sm text-gray-500">Your email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

en de `getCurrentUser` actie in de `actions/authActions.ts`:

```typescript
export const getCurrentUser = async (): Promise<User> => {
    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get("jwt");

    if (!jwtCookie) {
        throw new Error("You're not logged in");
    }

    try {
        const decoded = jwt.verify(jwtCookie.value, process.env.JWT_SECRET!) as User;
        return decoded;
    } catch (e) {
        throw new Error("Invalid token");
    }
}
```

## Uitloggen

We kunnen een eenvoudige uitlogactie toevoegen die de JWT cookie verwijdert. Hier is een voorbeeld van hoe je dit kunt implementeren in de `actions/authActions.ts`:

```typescript
export const logout = async () => {
    const cookieStore = await cookies();

    cookieStore.delete("jwt");

    redirect("/auth/login");
}
```

en een knop in het dashboard om uit te loggen:

```tsx
<form action={logout} className="w-full">
    <button
        type="submit"
        className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
    >
        Logout
    </button>
</form>
```