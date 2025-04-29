// components/sections/TestimonialSlider.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      quote: "The skills training program changed my life. I now run my own small business and can support my family independently.",
      name: "Harsh Yadav",
      role: "Entrepreneur",
      image: "https://ik.imagekit.io/w57hznch1e/harsh.png?updatedAt=1745849141518"
    },
    {
      id: 2,
      quote: "The mentorship I received helped me gain confidence and pursue higher education. I'm now studying computer science and inspiring other girls in my village.",
      name: "Harsh Yadav",
      role: "Student",
      image: "https://ik.imagekit.io/w57hznch1e/harsh.png?updatedAt=1745849141518"
    },
    {
      id: 3,
      quote: "After participating in the leadership program, I was able to advocate for better healthcare facilities in my community. We've seen real change happen.",
      name: "Harsh Yadav",
      role: "Community Leader",
      image: "https://ik.imagekit.io/w57hznch1e/harsh.png?updatedAt=1745849141518"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Hear from women whose lives have been transformed through our programs.
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mb-6">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote className="text-xl text-gray-600 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-center">
                  <div className="font-medium text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-primary">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full sm:-translate-x-1/2">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md text-black hover:text-[#23c5ca] focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full sm:translate-x-1/2">
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md text-black hover:text-[#23c5ca] focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-[#23c5ca]' : 'bg-[#23c5ca] opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
