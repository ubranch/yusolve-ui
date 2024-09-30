import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.css';
import React from 'react';
import Footer from '@/components/layout/Footer';

const sfProDisplay = localFont({
  src: [
    {
      path: './fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-display',
});

export const metadata: Metadata = {
  title: 'YUSOLVE - Drive Upstream Solutions',
  description: 'Drive Upstream Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${sfProDisplay.variable} flex min-h-screen flex-col font-sans`}
      >
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
