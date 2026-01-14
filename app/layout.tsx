import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import AppKitProvider from "@/src/components/appkit";
import { Toaster } from "react-hot-toast";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Junaid's Portfolio",
  description: "Crafting Next-Gen Software Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        <AppKitProvider>
          <Toaster />
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}
