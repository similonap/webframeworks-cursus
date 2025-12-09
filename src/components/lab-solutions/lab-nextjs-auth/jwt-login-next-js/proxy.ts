import { cookies } from "next/headers";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jwt from "jsonwebtoken";
 
export async function proxy(request: NextRequest) {
    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get("jwt");

    if (jwtCookie) {
        jwt.verify(jwtCookie.value, process.env.JWT_SECRET!, (err, decoded) => {
            if (err) return NextResponse.redirect(new URL('/auth/login', request.url));
            return NextResponse.next();
        });
    } else {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
}

export const config = {
  matcher: ['/','/dashboard'],
}