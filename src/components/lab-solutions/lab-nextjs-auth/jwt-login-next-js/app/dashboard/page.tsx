import { getCurrentUser, logout } from "@/actions/authActions";
import Image from "next/image";

export default async function Page() {
    const user = await getCurrentUser();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                </div>
                <div className="p-6 flex flex-col gap-4 items-center">
                    {user.avatar && (
                        <Image
                            src={`/${user.avatar}`}
                            alt={user.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    )}
                    <div className="text-center">
                        <p className="font-medium">Welcome, {user.name}!</p>
                        <p className="text-sm text-gray-500">Your email: {user.email}</p>
                    </div>

                    <form action={logout} className="w-full">
                        <button 
                            type="submit" 
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-black text-white hover:bg-gray-800"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
