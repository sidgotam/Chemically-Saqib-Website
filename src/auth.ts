import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import dbConnect from "./lib/db"
import User from "./models/User"
import bcrypt from "bcryptjs"
import { z } from "zod"
import { authConfig } from "./auth.config"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const { email, password } = await loginSchema.parseAsync(credentials)

                await dbConnect()
                const user = await User.findOne({ email }).select("+password")

                if (!user) {
                    throw new Error("Invalid credentials");
                }

                const isPasswordValid = await bcrypt.compare(password, user.password)

                if (!isPasswordValid) {
                    throw new Error("Invalid credentials");
                }

                return { id: user._id, email: user.email, name: user.name, role: user.role }
            },
        }),
    ],
})
