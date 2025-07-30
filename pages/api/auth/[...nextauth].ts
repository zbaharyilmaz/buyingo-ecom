import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
//import { PrismaAdapter } from "@auth/prisma-adapter"  //! bunu kur. pnpm i @next-auth/prisma-adapter
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import prisma from "@/libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          throw new Error(
            "Please check your email and password and try again."
          );
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.hashedPassword) {
          throw new Error("No account found with this email.");
        }
        const comparePassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!comparePassword) {
          throw new Error("ncorrect password. Please try again.");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);
