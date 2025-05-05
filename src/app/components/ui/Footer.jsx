// components/ui/Footer.js
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this to your newsletter service
    console.log('Newsletter signup:', email);
    setSubscribed(true);
    setEmail('');
    // Reset the subscribed state after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-gray-800 text-white cursor-default">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <h2 className="text-lg font-bold mb-4">N.A.V Yuva Foundation</h2>
            <p className="text-gray-300 mb-4">
              Works for the prosperity of disadvantaged through education, awareness and sustainable approach since 2022.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/N_A_V_Yuva" target='_blank' className="text-gray-300 hover:text-cyan-500" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.instagram.com/nav_yuva_foundation" target='_blank' className="text-gray-300 hover:text-pink-500" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/n-a-v-yuva-foundation" target='_blank' className="text-gray-300 hover:text-cyan-700" aria-label="Linkedin">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Programs</Link></li>
              {/* <li><Link href="/impact-stories" className="text-gray-300 hover:text-white">Impact Stories</Link></li> */}
              <li><Link href="/get_involved" className="text-gray-300 hover:text-white">Get Involved</Link></li>
              <li><Link href="/blogs" className="text-gray-300 hover:text-white">Blogs</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Policies</h2>
            <ul className="space-y-2">
              <li><Link href="https://drive.google.com/file/d/1ej3gRr4UaO-AaatPcnlEYNDDhGm2xT4-/view?usp=sharing" target='_blank' className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="https://drive.google.com/file/d/1CTer4725zuRS6wN955KQPwvFnBO8BJPn/view?usp=sharing" target='_blank' className="text-gray-300 hover:text-white">Donation Policy</Link></li>
              <li><Link href="https://drive.google.com/file/d/1iG8drncZ2SWAVy_bV1Ad9v1nvLYgKv9l/view?usp=sharing" target='_blank' className="text-gray-300 hover:text-white">Shipping Policy</Link></li>
              <li><Link href="https://drive.google.com/file/d/1d5Vu5xzmu6mhuEjN3wqbQtDlfPG3n55x/view?usp=sharing" target='_blank' className="text-gray-300 hover:text-white">Volunteer Policy</Link></li>
              <li><Link href="https://drive.google.com/file/d/18Vb5ep4uFzZQd634b8Jvme4neQxw3vNP/view?usp=sharing" target='_blank' className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="https://drive.google.com/file/d/1hi_8S1z2KeWGq7Dmh5qbuXubUAyJIt0U/view?usp=sharing" target='_blank' className="text-gray-300 hover:text-white">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          {/* <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <address className="not-italic text-gray-300 space-y-2">
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Building No. 315,</p>
              <p className='ml-8'>Village Karontha,</p>
              <p className='ml-8'>Jhajjar Road - Rohtak,</p>
              <p className='ml-8'>Haryana - 124001</p>
              <p className="flex gap-2 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918708951442" className="hover:text-white">+91 87089 51442</a>
              </p>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@navyuva.org" className="hover:text-white">contact@navyuva.org</a>
              </p>
            </address>
          </div> */}
          
          {/* Newsletter Signup */}
          <div>
            <h2 className="text-lg font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our programs, events, and success stories.
            </p>
            {subscribed ? (
              <div className="p-4 bg-green-100 text-green-800 rounded-md">
                Thank You for Subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative w-full max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full pl-4 pr-12 py-3 rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-primary border border-gray-300"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-dark focus:outline-none"
                    aria-label="Subscribe"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6 text-black"
                    >
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} NAV Yuva Foundation. All rights reserved.
          </p>
          <p className='text-sm text-gray-400 text-center'>
            Maintained by N.A.V Yuva Foundation (Regd.)
          </p>
          <p className='text-sm text-gray-400 text-center'>
          The images and content are copyrighted by N.A.V Yuva Foundation , violations of fair use policy will be subjected to legal action.
          </p>
        </div>
      </div>
    </footer>
  );
}
