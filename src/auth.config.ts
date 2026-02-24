import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role
            }
            return token
        },
        session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role
            }
            return session
        },
        authorized({ auth, request: nextUrl }) {
            const isLoggedIn = !!auth?.user
            const isOnAdmin = nextUrl.nextUrl.pathname.startsWith("/admin")
            const isLoginPage = nextUrl.nextUrl.pathname.startsWith("/admin/login")

            if (isOnAdmin && !isLoginPage) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            }

            if (isLoginPage && isLoggedIn) {
                return Response.redirect(new URL("/admin/dashboard", nextUrl.nextUrl))
            }

            return true
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
