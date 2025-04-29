// components/sections/Hero.js
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-primary cursor-default">
      <div className="absolute inset-0">
        <Image 
          src="/assets/img.jpg" 
          alt="NAV Yuva Foundation community work" 
          fill 
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Empowering Communities, Transforming Lives
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          NAV Yuva Foundation is dedicated to uplifting the underprivileged through education, women empowerment, environmental initiatives, and youth development programs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link 
            href="/get-involved"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:text-[#23c5ca] transition duration-300 ease-in-out"
          >
            Get Involved
          </Link>
          <Link 
            href="/programs"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:text-black transition duration-300 ease-in-out"
          >
            Our Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
