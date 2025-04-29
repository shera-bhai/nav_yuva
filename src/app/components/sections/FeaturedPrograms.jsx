// components/sections/FeaturedPrograms.js
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPrograms() {
  const programs = [
    {
      id: 1,
      title: 'Education Initiatives',
      description: 'Providing quality education, study materials, and mentorship to underprivileged children.',
      image: '/assets/programs/edu.jpg',
      link: '/programs#education-programs',
    },
    {
      id: 2,
      title: 'Women Empowerment',
      description: 'Skills training, financial literacy, and support for women to achieve economic independence.',
      image: '/assets/programs/women.png',
      link: '/programs#women-programs',
    },
    {
      id: 3,
      title: 'Environmental Conservation',
      description: 'Tree plantation drives and environmental awareness campaigns for sustainable communities.',
      image: '/assets/programs/env.jpg',
      link: '/programs#environment-programs',
    },
    {
      id: 4,
      title: 'Youth Development',
      description: 'Youth parliaments, debates, quizzes, and sports events to nurture future leaders.',
      image: '/assets/programs/youth.png',
      link: '/programs#youth-programs',
    },
  ];

  return (
    <div className="bg-white py-16 cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover how NAV Yuva Foundation is creating lasting change through our targeted initiatives.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
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
        
        {/* <div className="mt-10 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-gray-50 hover:bg-[#23c5ca] transition duration-500 ease-in-out"
          >
            View All Programs
          </Link>
        </div> */}
      </div>
    </div>
  );
}
