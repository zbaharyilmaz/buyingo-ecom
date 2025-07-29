import type { Metadata } from "next";
//import { Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/provider/CartProvider";
import { Toaster } from "react-hot-toast";

// const merienda = Merienda({
//   subsets: ["latin"],
//   variable: "--font-merienda",
//   weight: ["400", "700"],
// });

export const metadata: Metadata = {
  title: "Buyingo",
  description: "A unique marketplace for your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${merienda.variable} antialiased`}> */}
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
