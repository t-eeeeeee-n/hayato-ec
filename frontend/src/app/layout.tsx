import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ec",
  description: "ec site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={"min-h-dvh"}>
        <main className={""}>
            <CartProvider>
                <Navbar />
                {children}
                <Footer />
            </CartProvider>
        </main>
      </body>
    </html>
);
}
