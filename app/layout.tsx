import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const merienda = Merienda({
  subsets: ["latin"],
  variable: "--font-merienda",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zayn Bazaar",
  description: "A unique marketplace for your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merienda.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
