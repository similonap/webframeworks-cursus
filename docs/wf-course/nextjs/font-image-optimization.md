# Fonts en Image Optimization

Next.js heeft ingebouwde ondersteuning voor het optimaliseren van fonts en afbeeldingen. Dit kan de performance van je applicatie verbeteren door ervoor te zorgen dat alleen de benodigde fonts en afbeeldingen worden geladen. Ook wordt hier aan het gebruiksgemak gedacht van de gebruiker.

## Fonts

Een veelvoorkomend probleem bij font loading is dat de browser eerst de pagina toont met een fallback-font en daarna pas het custom font laadt. Dit veroorzaakt Cumulative Layout Shift (CLS): tekst springt van vorm en grootte, waardoor de layout verschuift.

Next.js lost dit op met next/font, dat fonts tijdens de build optimaliseert en lokaal host. Zo laden ze sneller en voorkom je layout shifts.

Je kan bijvoorbeeld een Google Font gebruiken door deze te importeren in je `layout.tsx` bestand:

```typescript
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
```

Je kan vervolgens deze font toevoegen aan je `body` element in het `layout.tsx` bestand:

```typescript
<body className={`${roboto.variable} font-sans`}>
```

Dit moet uiteraard niet altijd op de `body` toegepast worden. Je kan dit ook op specifieke componenten toepassen door de class toe te voegen aan het element waar je de font wil gebruiken.

## Image

Next.js kan statische assets, zoals afbeeldingen, serveren vanuit de top-level `/public` map. Bestanden in `/public` kunnen in je applicatie worden gebruikt. In gewone HTML zou je een afbeelding als volgt toevoegen:

```html
<img
  src="/hero.png"
    alt="Screenshots of the dashboard project showing desktop version"
/>
```

Maar dit betekent dat je handmatig moet:
- Zorgen dat je afbeelding responsief is op verschillende schermformaten.
- Afbeeldingsformaten specificeren voor verschillende apparaten.
- Layout shifts voorkomen terwijl de afbeeldingen laden.
- Afbeeldingen lazy loaden die buiten het zicht van de gebruiker zijn.

Dit is allemaal heel veel werk en vrij complex, maar gelukkig heeft Next.js hier een oplossing voor met het `next/image` component dat automatisch je afbeeldingen optimaliseert.

Hiervoor moet je eerst het `Image` component importeren uit `next/image`:

```typescript
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/hero.png"
        alt="Screenshots of the dashboard project showing desktop version"
        width={700}
        height={400}
        priority
      />
    </div>
  );
}
```

Je moet hier wel de `width` en `height` specificeren van de afbeelding. Dit is nodig om layout shifts te voorkomen. Je moet hier wel de juiste verhouding van de afbeelding gebruiken. Het `next/image` component zorgt er dan voor dat de afbeelding op de juiste manier geschaald wordt.

Je kan ook kiezen voor de afbeelding te importeren en dan de `width` en `height` automatisch te laten bepalen:

```typescript
import Image from "next/image";
import heroImage from "./hero.png";

export default function Home() {
  return (
    <div>
      <Image
        src={heroImage}
        alt="Screenshots of the dashboard project showing desktop version"
        priority
      />
    </div>
  );
}
```

Als je een afbeelding wil gebruiken die van een externe bron kom dan moet je altijd de `width` en `height` specificeren.

```typescript
 <Image
    src="https://picsum.photos/300/200"
    width={300}
    height={200}
    className="block"
    alt="Screenshot of the dashboard project showing mobile version"
    />
```

Geeft een fout omdat Next.js niet weet of deze externe bron betrouwbaar is. Je moet deze domeinen expliciet toevoegen aan de `next.config.js` bestand:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
```
