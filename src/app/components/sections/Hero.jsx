// components/sections/Hero.js
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-black cursor-default">
      <div className="h-40 md:h-22">
        <Image
          src="/assets/home.jpg"
          fill
          alt="N.A.V Yuva Foundation community work"
          className="object-cover opacity-70"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          A Step Towards Change
        </h1>
        <p className="mt-6 opacity-80 text-xl text-white max-w-3xl">
          N.A.V Yuva Foundation aims to empower the unprivileged through education, youth development, women empowerment and sustainable initiatives.
        </p>
        <div className="hidden mt-10 md:flex flex-col sm:flex-row gap-4">
          <Link
            href="/get-involved"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:text-[#23c5ca] transition duration-300 ease-in-out"
          >
            Get Involved
          </Link>
          <Link 
            href="/programs"
            className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent hover:text-[#23c5ca] transition duration-300 ease-in-out"
          >
            Our Programs
          </Link>
        </div>
      </div>
    </div>
  );
}