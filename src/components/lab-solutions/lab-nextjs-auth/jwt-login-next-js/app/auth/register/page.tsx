"use client";

import { register } from "@/actions/authActions"
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
        <div className="flex flex-col flex-1 justify-center items-center min-h-screen bg-gray-50">
            <div className="max-w-md w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Create an account</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Enter your details below to create your account
                    </p>
                    {state.errors.general.length > 0 && (
                        <p className="text-sm text-red-600 mt-2">
                            {state.errors.general.join(", ")}
                        </p>
                    )}
                </div>
                <div className="p-6">
                    <form action={registerAction} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className={`block text-sm font-medium ${state.errors.name.length > 0 ? 'text-red-500' : 'text-gray-700'}`}>Name</label>
                            <input
                                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.errors.name.length > 0 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
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
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className={`block text-sm font-medium ${state.errors.email.length > 0 ? 'text-red-500' : 'text-gray-700'}`}>Email</label>
                            <input
                                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.errors.email.length > 0 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
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
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className={`block text-sm font-medium ${state.errors.password.length > 0 ? 'text-red-500' : 'text-gray-700'}`}>Password</label>
                            <input
                                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.errors.password.length > 0 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
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
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className={`block text-sm font-medium ${state.errors.confirmPassword.length > 0 ? 'text-red-500' : 'text-gray-700'}`}>Confirm Password</label>
                            <input
                                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.errors.confirmPassword.length > 0 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
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
                        </div>
                        <div className="pt-2">
                            <button 
                                type="submit" 
                                disabled={pending}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-black text-white hover:bg-gray-800"
                            >
                                {pending ? "Creating account..." : "Register"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default RegisterPage;
