"use server";

import { findUserByEmail, createUser } from "@/database/auth";
import { User } from "@/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

const validateEmail = (email: string) => {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push("Email is required");
    }
    if (email.length < 5) {
        errors.push("Email must be at least 5 characters long");
    }
    if (!emailRegex.test(email)) {
        errors.push("Email format is invalid");
    }
    return errors;
}

const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (!password) {
        errors.push("Password is required");
    }
    return errors;
}

const validateName = (name: string) => {
    const errors: string[] = [];
    if (!name) {
        errors.push("Name is required");
    }
    return errors;
}


interface LoginState {
    errors: {
        email: string[];
        password: string[];
        general: string[];
    };
    email: string;
    success: boolean;
}

interface RegisterState {
    errors: {
        email: string[];
        password: string[];
        confirmPassword: string[];
        name: string[];
        general: string[];
    };
    email: string;
    name: string;
    success: boolean;
}

export const register = async (prevState: RegisterState, formData: FormData): Promise<RegisterState> => {
    let email = formData.get("email")?.toString() ?? "";
    let password = formData.get("password")?.toString() ?? "";
    let confirmPassword = formData.get("confirmPassword")?.toString() ?? "";
    let name = formData.get("name")?.toString() ?? "";

    let emailErrors = validateEmail(email);
    let passwordErrors = validatePassword(password);
    let nameErrors = validateName(name);
    let confirmPasswordErrors: string[] = [];

    if (password !== confirmPassword) {
        confirmPasswordErrors.push("Passwords do not match");
    }

    if (emailErrors.length > 0 || passwordErrors.length > 0 || nameErrors.length > 0 || confirmPasswordErrors.length > 0) {
        return {
            errors: {
                email: emailErrors,
                password: passwordErrors,
                confirmPassword: confirmPasswordErrors,
                name: nameErrors,
                general: []
            },
            email: email,
            name: name,
            success: false
        }
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        return {
            errors: {
                email: ["User already exists"],
                password: [],
                confirmPassword: [],
                name: [],
                general: []
            },
            email: email,
            name: name,
            success: false
        }
    }

    const passwordHash = await bcrypt.hash(password, 10);
    
    const newUser: User = {
        id: crypto.randomUUID(),
        email,
        name,
        avatar: "", 
        passwordHash
    };

    await createUser(newUser);

    redirect("/auth/login");
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

export const logout = async () => {
    const cookieStore = await cookies();

    cookieStore.delete("jwt");

    redirect("/auth/login");
}