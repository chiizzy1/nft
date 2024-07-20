import type { Metadata } from "next";
import { Laila } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const laila = Laila({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-laila" });

const detacher = localFont({
  src: "./fonts/detacher.otf",
  variable: "--font-detacher",
});

export const metadata: Metadata = {
  title: "Unique NFTs",
  description: "Explore, buy, and sell extraordinary NFTs on our decentralized marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-secondary", laila.variable, detacher.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
