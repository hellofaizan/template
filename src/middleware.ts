import authConfig from "~/server/auth.config"
import NextAuth from "next-auth"
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    protectedRoutes,
} from '~/server/routes'

const { auth } = NextAuth(authConfig);

export default auth((req):any => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
    const isAutRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null;
    }

    if (isAutRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null
    }
    
    if (!isLoggedIn && isProtectedRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
        const encodedUrl = encodeURIComponent(callbackUrl);
        return Response.redirect(new URL(
            `/auth?callbackUrl=${encodedUrl}`, 
            nextUrl
        ));
    }

    return null;
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}