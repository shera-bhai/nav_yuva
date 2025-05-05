// app/layout.js
'use client';
import AOS from 'aos';
import './globals.css';
import 'aos/dist/aos.css';
import { Inter } from 'next/font/google';
import Chatbot from './components/Chatbot';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import { ReactNode, useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing type
      once: true, // Whether animation should happen only once
      mirror: false,
    });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
