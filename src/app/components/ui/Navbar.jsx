// components/ui/Navbar.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, React } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center w-full h-16">
          <div className="flex items-center">
            <Link href="/" className=" my-4 font-bold text-xl">
              <Image src="/assets/logo.png" alt="NAV Yuva Foundation" width={110} height={40} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Home</Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/about' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>About Us</Link>
              {/* <Link href="/programs" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/programs' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Programs</Link> */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className={`inline-flex px-3 py-2 rounded-md text-sm font-medium ${pathname === '/programs' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>
                    Programs
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <Link href="/programs"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >Programs</Link>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <Link href="/programs#education-initiative-programs"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >Education Initiatives</Link>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <Link href="/programs#women-empowerment-programs"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >Women Empowerment</Link>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <Link href="/programs#environmental-conservation-programs"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >Environmental Conservation</Link>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <Link href="/programs#youth-development-programs"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >Youth Development</Link>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <Link href="/programs#health-nutrition-programs"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >Health & Nutrition</Link>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <Link href="/programs#blood-donation-programs"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >Blood Donation</Link>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>

              <Link href="/get_involved" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/get_involved' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Get Involved</Link>
              <Link href="/blogs" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/blogs' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Blogs</Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/contact' ? 'text-[#23c5ca]' : 'text-black'} hover:text-[#23c5ca] transition duration-300 ease-in-out`}>Contact</Link>
              <Link href="https://rzp.io/rzp/cGixej34" target="_blank" 
              className="px-3 py-2 text-sm font-medium text-white bg-cyan-300 hover:text-black hover:bg-cyan-400 transition duration-300 ease-in-out"
              >Donate Now</Link>

                {/* <Link href="/impact-stories" className="px-3 py-2 rounded-md text-sm font-medium">Impact Stories</Link>
                <Link href="/resources" className="px-3 py-2 rounded-md text-sm font-medium">Resources</Link> */}
                {/* <Link href="https://rzp.io/rzp/EdBQayel" target='_blank' // Test page
                      className="px-3 py-2 bg-primary text-white text-sm font-medium hover:bg-[#1aa3a3] hover:text-black transition duration-300 ease-in-out">
                      Donate Us</Link> */}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
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
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Accordion className='outline-none shadow-none border-0 bg-transparent none' open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader className='px-3 py-2 border-b-0 rounded-md text-base font-medium' onClick={() => handleOpen(1)}>Programs</AccordionHeader>
              <AccordionBody>
                <Link href="/programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Programs</Link>
                <Link href="/programs#education-initiative-programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Education Initiatives</Link>
                <Link href="/programs#women-empowerment-programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Women Empowerment</Link>
                <Link href="/programs#environmental-conservation-programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Environmental Conservation</Link>
                <Link href="/programs#youth-development-programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Youth Development</Link>
                <Link href="/programs#health-nutrition-programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Health & Nutrition</Link>
                <Link href="/programs#blood-donation-programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Blood Donation</Link>
              </AccordionBody>
            </Accordion>
            {/* <Link href="/programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Programs</Link> */}
            {/* <Link href="/impact-stories" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Impact Stories</Link> */}
            <Link href="/get_involved" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Get Involved</Link>
            <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
            {/* <Link href="/resources" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Resources</Link> */}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link href="https://rzp.io/rzp/cGixej34" target='_blank' onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 w- text-base font-medium bg-primary hover:bg-[#1aa3a3] hover:text-black transition duration-300 ease-in-out">
              Donate Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
