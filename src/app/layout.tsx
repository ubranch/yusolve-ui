import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.css';
import React from 'react';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'sonner';

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
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: 'rgba(24, 52, 74, 0.4)',
              color: 'white',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontFamily: 'var(--font-sf-pro-display), sans-serif',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  );
}
