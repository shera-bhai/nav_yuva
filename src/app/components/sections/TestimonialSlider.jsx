// components/sections/TestimonialSlider.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      quote: "The youth should have an intoxication of patriotism, hard work, honesty, and morality. Only then will today's youth progress, contribute to the development of the nation and state, and I am delighted that N.A.V Yuva Foundation is playing a commendable role in instilling such sentiments among the youth in society.",
      name: "Yogeshwar Dutt",
      role: "Olympic Medalist",
      image: "/assets/testimonials/yogeshwar_dutt.webp"
    },
    {
      id: 2,
      quote: "N.A.V Yuva Foundation works with a selfless spirit and complete dedication for the welfare of the society, is truly commendable. I feel immense happiness seeing such dedicated youth contributing in nurturing the space. My best wishes and support have always been with the foundation.",
      name: "Ashish Sangwan",
      role: "District Youth Officer",
      image: "/assets/testimonials/abhishek_sangwan.png"
    },
    {
      id: 3,
      quote: "N.A.V Yuva Foundation, in collaboration with Amar Ujala as its knowledge partner, has successfully organized the National Nav Yuva Chatra Sansad. They adopted a unique approach to inspire young people to stand against drug abuse through dialogue. This organization has consistently works for the upliftment of youth. Best wishes to them for a bright future.",
      name: "Yogesh Narayan Dikshit",
      role: "Editor - AMAR UJALA",
      image: "/assets/testimonials/yogesh_narayan.png"
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
            Voices of Influence
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Hear from our Esteemed Dignitaires.
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 border-2 border-cyan-300 shadow-lg rounded-full overflow-hidden mb-6">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-fill"
                  />
                </div>
                <blockquote className="text-xl text-gray-600 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-center">
                  <div className="text-2xl font-medium text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-lg text-primary">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full sm:-translate-x-1/2">
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
          
          <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-full sm:translate-x-1/2">
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
                className={`h-4 w-4 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-cyan-300' : 'border-2 border-cyan-300 opacity-30'
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
