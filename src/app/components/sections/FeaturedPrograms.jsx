"use client";
// components/sections/FeaturedPrograms.js
// import Image from 'next/image';
// import Link from 'next/link';

// export default function FeaturedPrograms() {
//   const programs = [
//     {
//       id: 1,
//       title: 'Education Initiatives',
//       description: 'Delivering valuable education, learning resources and guidance to youth.',
//       image: '/assets/programs/edu.jpg',
//       link: '/programs#education-programs',
//     },
//     {
//       id: 2,
//       title: 'Women Empowerment',
//       description: 'Training in skills, financial literacy and assistance for women to attain equality in society.',
//       image: '/assets/programs/women.png',
//       link: '/programs#women-programs',
//     },
//     {
//       id: 3,
//       title: 'Environmental Conservation',
//       description: 'Tree plantation initiatives and awareness programs for fostering sustainable development.',
//       image: '/assets/programs/env.jpg',
//       link: '/programs#environment-programs',
//     },
//     {
//       id: 4,
//       title: 'Youth Development',
//       description: 'Athletics contests, career counselling, N.A.V Yuva Chhatra Sansad, Debates are designed to cultivate the young voices.',
//       image: '/assets/programs/youth.png',
//       link: '/programs#youth-programs',
//     },
//     {
//       id: 5,
//       title: 'Health & Nutrition',
//       description: 'Food distribution drives and awareness campaigns on balanced diets to promote optimal physical and mental well being.',
//       image: '/assets/programs/youth.png',
//       link: '/programs#youth-programs',
//     },
//     {
//       id: 6,
//       title: 'Blood Donation',
//       description: 'Blood Donation campaigns and outreach programs to save precious lives.',
//       image: '/assets/programs/youth.png',
//       link: '/programs#youth-programs',
//     },
//   ];

//   return (
//     <div className="bg-white py-16 cursor-default">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Our Programs
//           </h2>
//           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
//             Strengthening the community through prioritizing youth development, health and nutrition, environmental conservation and women empowerment.
//           </p>
//         </div>
        
//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {programs.map((program) => (
//             <div key={program.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 shadow-sm hover:transform hover:scale-105 hover:shadow-[#23c5ca]">
//               <div className="flex-shrink-0 relative h-56">
//                 <Image
//                   src={program.image}
//                   alt={program.title}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <div className="flex-1 bg-white p-6 flex flex-col justify-between">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
//                   <p className="mt-3 text-base text-gray-500">{program.description}</p>
//                 </div>
//                 <div className="mt-6">
//                   <Link
//                     href={program.link}
//                     className="text-primary hover:text-primary-dark font-medium"
//                   >
//                     Learn more →
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* <div className="mt-10 text-center">
//           <Link
//             href="/programs"
//             className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-gray-50 hover:bg-primary transition duration-500 ease-in-out"
//           >
//             View All Programs
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
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
      description: 'Blood Donation campaigns and outreach programs to save precious lives.',
      image: '/assets/programs/blood_donation/blood.jpg',
      link: '/programs#blood-donation-programs',
    },
  ];

  const [currentStart, setCurrentStart] = useState(0);

  const handlePrev = () => {
    setCurrentStart((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const handleNext = () => {
    setCurrentStart((prev) => (prev + 1) % programs.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const visiblePrograms = [];
  for (let i = 0; i < 4; i++) {
    visiblePrograms.push(programs[(currentStart + i) % programs.length]);
  }

  return (
    <div className="bg-white py-16 cursor-default relative">
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
          {visiblePrograms.map((program) => (
            <div key={program.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 shadow-sm hover:transform hover:scale-105 hover:shadow-[#23c5ca]">
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
                <div className="mt-6">
                  <Link
                    href={program.link}
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="justify-center mt-8 space-x-4 hidden md:flex">
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
      </div>
    </div>
  );
}