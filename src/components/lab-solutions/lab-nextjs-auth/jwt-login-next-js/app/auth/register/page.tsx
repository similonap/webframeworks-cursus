"use client";

import { register } from "@/actions/authActions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useActionState } from "react"

const RegisterPage = () => {
    const [state, registerAction, pending] = useActionState(register, { 
        success: false, 
        email: "", 
        name: "",
        errors: { 
            email: [], 
            password: [], 
            confirmPassword: [],
            name: [],
            general: [] 
        } 
    });

    return (
        <div className="flex flex-col flex-1 justify-center">
            <div className="max-w-xl w-full mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your details below to create your account
                    </CardDescription>
                    {state.errors.general.length > 0 && (
                        <p className="text-sm text-red-600 mt-2">
                            {state.errors.general.join(", ")}
                        </p>
                    )}
                </CardHeader>
                <CardContent>
                    <form action={registerAction}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name" className={`${state.errors.name.length > 0 ? 'text-red-500' : ''}`}>Name</FieldLabel>
                                <Input
                                    className={`${state.errors.name.length > 0 ? 'border-red-500' : ''}`}
                                    id="name"
                                    name="name"
                                    type="text"
                                    defaultValue={state.name}
                                    placeholder="John Doe"
                                />
                                {state.errors.name.length > 0 && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {state.errors.name.join(", ")}
                                    </p>
                                )}
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email" className={`${state.errors.email.length > 0 ? 'text-red-500' : ''}`}>Email</FieldLabel>
                                <Input
                                    className={`${state.errors.email.length > 0 ? 'border-red-500' : ''}`}
                                    id="email"
                                    name="email"
                                    type="text"
                                    defaultValue={state.email}
                                    placeholder="m@example.com"
                                />
                                {state.errors.email.length > 0 && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {state.errors.email.join(", ")}
                                    </p>
                                )}
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password" className={`${state.errors.password.length > 0 ? 'text-red-500' : ''}`}>Password</FieldLabel>
                                <Input
                                    className={`${state.errors.password.length > 0 ? 'border-red-500' : ''}`}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Your password"
                                />
                                {state.errors.password.length > 0 && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {state.errors.password.join(", ")}
                                    </p>
                                )}
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="confirmPassword" className={`${state.errors.confirmPassword.length > 0 ? 'text-red-500' : ''}`}>Confirm Password</FieldLabel>
                                <Input
                                    className={`${state.errors.confirmPassword.length > 0 ? 'border-red-500' : ''}`}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                />
                                {state.errors.confirmPassword.length > 0 && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {state.errors.confirmPassword.join(", ")}
                                    </p>
                                )}
                            </Field>
                            <Field>
                                <Button type="submit" disabled={pending}>{pending ? "Creating account..." : "Register"}</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            </div>
        </div>
  );
}

export default RegisterPage;
