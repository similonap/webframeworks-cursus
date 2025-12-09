import { getCurrentUser, logout } from "@/actions/authActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function Page() {
    const user = await getCurrentUser();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 items-center">
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
                        <Button type="submit" className="w-full">
                            Logout
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
