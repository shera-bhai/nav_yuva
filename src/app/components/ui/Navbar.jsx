// components/ui/Navbar.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-16">
          <div className="flex items-center">
            <Link href="/" className=" my-4 font-bold text-xl">
              <Image src="/assets/logo.png" alt="NAV Yuva Foundation" width={110} height={40} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Home</Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/about' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>About Us</Link>
              <Link href="/programs" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/programs' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Programs</Link>
              <Link href="/get-involved" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/get-involved' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Get Involved</Link>
              <Link href="/blog" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/blog' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Blog</Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/contact' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Contact</Link>
              <Link href="https://rzp.io/rzp/cGixej34" target="_blank" 
              className="px-3 py-2 bg-[#23c5ca] text-white text-sm font-medium hover:text-black transition duration-300 ease-in-out"
              >Donate Us</Link>
                <Link href="/impact-stories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-dark">Impact Stories</Link>
                <Link href="/resources" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-dark">Resources</Link>
                {/* <Link href="https://rzp.io/rzp/EdBQayel" target='_blank' // Test page
                      className="px-3 py-2 bg-[#23c5ca] text-white text-sm font-medium hover:bg-[#1aa3a3] hover:text-black transition duration-300 ease-in-out">
                      Donate Us</Link> */}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-dark focus:outline-none"
            >
              <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark">About Us</Link>
            <Link href="/programs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark">Programs</Link>
            <Link href="/impact-stories" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark">Impact Stories</Link>
            <Link href="/get-involved" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark">Get Involved</Link>
            <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark">Resources</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark">Contact</Link>
            <Link href="https://rzp.io/rzp/EdBQayel" target='_blank'
                  className="block px-3 py-2 w- text-base font-medium bg-[#23c5ca] hover:bg-[#1aa3a3] hover:text-black transition duration-300 ease-in-out">
                  Donate Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
