// app/auth.ts
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            await connect();
            try {
                const user = await User.findOne({ email: credentials?.email });
                if (user && credentials?.password) {
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if (isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error("Incorrect password");
                    }
                } else {
                    throw new Error("User not found or password is missing");
                }
            } catch (err) {
                if (err instanceof Error) {
                    throw new Error(err.message || "Error during authorization");
                } else {
                    throw new Error("Unknown error during authorization");
                }
            }
        },    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
        if (account?.provider === "credentials") {
            return true;
        }
        return false;
    },  },
};