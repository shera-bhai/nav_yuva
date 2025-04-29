// app/layout.js
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/ui/Navbar';
// import { log } from 'console';
import Footer from './components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
