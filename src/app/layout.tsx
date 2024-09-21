import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-sans',
});

export const metadata: Metadata = {
  title: "YUSOLVE - Drive Upstream Solutions",
  description: "Drive Upstream Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} font-sans font-medium`}>
        {children}
      </body>
    </html>
  );
}
