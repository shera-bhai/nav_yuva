'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPrograms() {
  const programs = [
    {
      id: 1,
      title: 'Education Initiatives',
      description: 'Delivering valuable education, learning resources and guidance to youth.',
      image: '/assets/programs/education_initiative/education.jpg',
      link: '/programs#education-initiative-programs',
    },
    {
      id: 2,
      title: 'Women Empowerment',
      description: 'Training in skills, financial literacy and assistance for women to attain equality in society.',
      image: '/assets/programs/women_empowerment/women.png',
      link: '/programs#women-empowerment-programs',
    },
    {
      id: 3,
      title: 'Environmental Conservation',
      description: 'Tree plantation initiatives and awareness programs for fostering sustainable development.',
      image: '/assets/programs/environmental_conservation/environment.jpg',
      link: '/programs#environmental-conservation-programs',
    },
    {
      id: 4,
      title: 'Youth Development',
      description: 'Athletics contests, career counselling, N.A.V Yuva Chhatra Sansad, Debates are designed to cultivate the young voices.',
      image: '/assets/programs/youth_development/youth.png',
      link: '/programs#youth-development-programs',
    },
    {
      id: 5,
      title: 'Health & Nutrition',
      description: 'Food distribution drives and awareness campaigns on balanced diets to promote optimal physical and mental well being.',
      image: '/assets/programs/health_nutrition/health.jpg',
      link: '/programs#health-nutrition-programs',
    },
    {
      id: 6,
      title: 'Blood Donation',
      description: 'Blood donation campaigns and outreach programs to save precious lives.',
      image: '/assets/programs/blood_donation/blood.jpg',
      link: '/programs#blood-donation-programs',
    },
  ];

  const [currentStart, setCurrentStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Detect screen size to determine if on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set up Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentStart((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const handleNext = () => {
    setCurrentStart((prev) => (prev + 1) % programs.length);
  };

  // Auto-slide only on non-mobile devices AND when the section is in view
  useEffect(() => {
    if (isMobile || !isInView) return; // Skip auto-sliding on mobile or if not in view

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isMobile, isInView]); // Re-run effect if isMobile or isInView changes

  // Prepare visible programs for non-mobile view (carousel with 4 cards)
  const visiblePrograms = [];
  if (!isMobile) {
    for (let i = 0; i < 4; i++) {
      visiblePrograms.push(programs[(currentStart + i) % programs.length]);
    }
  }

  // On mobile, show all programs; on larger screens, show visiblePrograms (carousel)
  const programsToDisplay = isMobile ? programs : visiblePrograms;

  return (
    <div ref={sectionRef} className="bg-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Strengthening the community through prioritizing youth development, health and nutrition, environmental conservation and women empowerment.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700">
          {programsToDisplay.map((program) => (
            <a
              href={program.link}
              key={program.id}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex-shrink-0 relative h-56">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{program.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation buttons (visible only on non-mobile screens) */}
        {!isMobile && (
          <div className="justify-center mt-8 space-x-4 flex">
            <button
              onClick={handlePrev}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              ⬅ Prev
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Next ➡
            </button>
          </div>
        )}
      </div>
    </div>
  );
}