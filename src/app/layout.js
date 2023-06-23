import Navbar from "../../components/navbarcomponents/Navbar";
import { NextAuthProvider } from "../../contexts/Provider";
import "./globals.css";
import { Roboto } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

const roboto = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={roboto.className}>
        {!session ? (
          <NextAuthProvider>{children}</NextAuthProvider>
        ) : (
          <NextAuthProvider>
            <Navbar />
            {children}
          </NextAuthProvider>
        )}
      </body>
    </html>
  );
}
