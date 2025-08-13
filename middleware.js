import { NextResponse } from 'next/server'

const authRoutes = ['/login', '/register'];

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    if (request.nextUrl.pathname === '/') {
        return;
    }
    if (authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
        if (request.cookies.has('BlackAshERP-token')) {
            return NextResponse.redirect(new URL('/profile', request.url))
        }
        return;
    }

    if (!request.cookies.has('BlackAshERP-token')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}