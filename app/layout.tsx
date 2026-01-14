import type { Metadata } from "next";
import {Sora, Inter } from "next/font/google";
import "./globals.css";
import AppKitProvider from "@/src/components/appkit";
import { Toaster } from "react-hot-toast";

// Import Inter font
const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});
export const metadata: Metadata = {
  title: "Faticore Technologies",
  description: "Faticore Technologies - Crafting Next-Gen Software Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Uncomment AppKitProvider if needed */}
        {/* <AppKitProvider> */}
        <Toaster />
        {children}
        {/* </AppKitProvider> */}
      </body>
    </html>
  );
}
