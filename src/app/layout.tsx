import type { Metadata } from "next";
import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DarkGPT",
  description: "Advanced Cyber Security AI",
  icons: {
    icon: '/favicon.ico',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-secondary antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}