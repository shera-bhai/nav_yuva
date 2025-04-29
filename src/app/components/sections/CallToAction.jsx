// components/sections/CallToAction.js
import Link from 'next/link';

export default function CallToAction() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to make a difference?</span>
          <span className="block text-secondary">Join our mission today.</span>
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row sm:gap-4 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="https://rzp.io/rzp/cGixej34" target='_blank'
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:text-[#23c5ca] mb-4 sm:mb-0 transition duration-300 ease-in-out"
          >
            Donate Now
          </Link>
          <Link
            href="/get-involved/volunteer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:text-black transition duration-300 ease-in-out"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}
