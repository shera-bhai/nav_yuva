// app/programs/page.js

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Programs | NAV Yuva Foundation',
  description: 'Explore NAV Yuva Foundation\'s diverse programs focused on education, women empowerment, environmental conservation, health initiatives, and youth development.',
};

export default function ProgramsPage() {
  // Program categories data
  const programCategories = [
    {
      id: "education",
      title: "Education Initiatives",
      description: "Our education programs aim to provide quality learning opportunities to underserved communities, bridging the educational gap and empowering children through knowledge.",
      image: "/assets/programs/edu.jpg"
    },
    {
      id: "women",
      title: "Women Empowerment",
      description: "We work to empower women through skill development, financial literacy, and entrepreneurship training, helping them become self-reliant and confident contributors to society.",
      image: "/assets/programs/women.png"
    },
    {
      id: "environment",
      title: "Environmental Conservation",
      description: "Our environmental programs focus on creating sustainable communities through tree plantation, waste management education, and promoting eco-friendly practices.",
      image: "/assets/programs/env.jpg"
    },
    {
      id: "health",
      title: "Health & Nutrition",
      description: "We organize health camps, awareness sessions, and nutrition programs to improve the overall well-being of communities with limited access to healthcare.",
      image: "/assets/programs/health.jpg"
    },
    {
      id: "youth",
      title: "Youth Development",
      description: "Our youth programs foster leadership, critical thinking, and civic engagement through debates, youth parliaments, sports, and career counseling.",
      image: "/assets/programs/youth.png"
    }
  ];

  // Featured programs data
  const featuredPrograms = [
    {
      category: "education",
      title: "Village Learning Centers",
      description: "Establishing learning centers in remote villages to provide supplementary education, digital literacy, and library facilities to school-going children.",
      impact: "Currently operating in 15 villages, benefiting over 1,200 children annually",
      image: "/images/programs/learning-center.jpg"
    },
    {
      category: "education",
      title: "Scholarship Program",
      description: "Providing financial assistance to promising students from economically disadvantaged backgrounds to pursue higher education.",
      impact: "Awarded 150+ scholarships in the last academic year",
      image: "/images/programs/scholarship.jpg"
    },
    {
      category: "women",
      title: "Rural Women Entrepreneurship",
      description: "Training rural women in entrepreneurship, connecting them with microfinance opportunities, and helping them establish small businesses.",
      impact: "Helped establish 75+ women-led small businesses in the last 2 years",
      image: "/images/programs/women-entrepreneurship.jpg"
    },
    {
      category: "women",
      title: "Digital Literacy for Women",
      description: "Equipping women with basic computer skills, smartphone usage, and internet literacy to bridge the digital gender divide.",
      impact: "Trained over 500 women across 25 villages",
      image: "/images/programs/women-digital.jpg"
    },
    {
      category: "environment",
      title: "Eco-Clubs in Schools",
      description: "Establishing and supporting environmental clubs in rural schools to create awareness and foster eco-friendly practices among students.",
      impact: "Active in 35 schools with over 1,500 student participants",
      image: "/images/programs/eco-clubs.jpg"
    },
    {
      category: "environment",
      title: "Swachta Abhiyan",
      description: "Comprehensive program to transform villages through tree plantation, waste management systems, and renewable energy solutions.",
      impact: "Planted 25,000+ trees and implemented waste management in 10 villages",
      image: "https://ik.imagekit.io/w57hznch1e/swachta_abhiyan.jpg?updatedAt=1745922816431"
    },
    {
      category: "health",
      title: "Mobile Health Camps",
      description: "Organizing regular health camps in remote villages with medical professionals to provide check-ups, medicines, and health education.",
      impact: "Conducted 45 camps last year, serving over 7,500 patients",
      image: "/images/programs/health-camps.jpg"
    },
    {
      category: "health",
      title: "Nutrition for Children",
      description: "Addressing malnutrition through nutrition education, supplements, and support for community kitchens in underserved areas.",
      impact: "Supporting nutritional needs of 800+ children across 12 villages",
      image: "/images/programs/nutrition.jpg"
    },
    {
      category: "youth",
      title: "Youth Parliament Program",
      description: "Organizing youth parliaments in rural schools and communities to develop leadership, public speaking, and democratic values.",
      impact: "Engaged 2,000+ young participants across 40 schools",
      image: "/images/programs/youth-parliament.jpg"
    },
    {
      category: "youth",
      title: "Sports for Development",
      description: "Using sports as a medium to promote teamwork, discipline, and physical well-being among rural youth with limited recreational facilities.",
      impact: "Regular programs in 30 villages benefiting 1,800+ young people",
      image: "/images/programs/sports.jpg"
    }
  ];

  // Impact statistics data
  const impactNumbers = [
    { number: "50,000+", label: "Childrens Educated" },
    { number: "1,500+", label: "Womens Empowered" },
    { number: "18,000+", label: "Plantations" },
    { number: "3,000+", label: "Meals Shared" },
    { number: "1,000+", label: "Blood Units Collected" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/programs/programs-hero.jpg"
            alt="NAV Yuva Foundation Programs"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Empowering communities through sustainable development initiatives focused on education, women empowerment, environmental conservation, health, and youth development.
          </p>
        </div>
      </div>

      {/* Impact Numbers Section */}
      <div className="bg-primary-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {impactNumbers.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-white">{item.number}</p>
                <p className="mt-2 text-base text-primary-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Focus Areas
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We work across multiple domains to create holistic development solutions that address the diverse needs of underserved communities.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {programCategories.map((category, index) => (
              <div key={index} id={category.id} className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="relative aspect-w-16 h-84 rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-7">
                  <div className={`${index % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                      {category.description}
                    </p>
                    {/* <div className="mt-8">
                      <a href={`#${category.id}-programs`} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black hover:bg-primary-dark">
                        View Programs
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Programs Section */}
      {programCategories.map((category) => (
        <div key={category.id} id={`${category.id}-programs`} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {category.title} Programs
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Explore our initiatives focused on {category.title.toLowerCase()}.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              {featuredPrograms
                .filter(program => program.category === category.id)
                .map((program, index) => (
                  <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                    <div className="flex-shrink-0 relative h-80">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                        <p className="mt-3 text-base text-gray-500">{program.description}</p>
                        <div className="mt-4 bg-primary-light bg-opacity-20 px-4 py-3 rounded-lg">
                          <p className="text-sm font-medium text-primary-dark">
                            <span className="font-bold">Impact:</span> {program.impact}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Link href={`/programs/${category.id}/${program.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-medium text-primary hover:text-primary-dark">
                          Learn more about this program →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}

      {/* Approach Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Approach
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At NAV Yuva Foundation, we believe in creating sustainable impact through community participation and ownership. Our programs are designed with these key principles:
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Community-Centered</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We involve communities in program design and implementation to ensure relevance and foster ownership.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Sustainable Impact</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our programs are designed for long-term sustainability rather than short-term relief, empowering communities to become self-reliant.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Collaborative</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We partner with government agencies, other NGOs, and corporate entities to leverage resources and expertise for maximum impact.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Transparent & Accountable</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We maintain transparency in our operations and are accountable to our beneficiaries, donors, and partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-80 aspect-w-5 aspect-h-3 rounded-lg overflow-hidden lg:h-auto">
                <Image
                  src="/images/programs/approach.jpg"
                  alt="Our approach to community development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Preview */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Real stories of transformation and impact from our program beneficiaries.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/stories/story1.jpg"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">From School Dropout to Teacher</h3>
                <p className="mt-2 text-sm text-gray-500">
                  How Meena from Rajgarh village overcame obstacles to become an educator in her community.
                </p>
                <div className="mt-4">
                  <Link href="/impact-stories/meena" className="text-primary hover:text-primary-dark font-medium">
                    Read her story →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/stories/story2.jpg"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">The Green Village Transformation</h3>
                <p className="mt-2 text-sm text-gray-500">
                  How Sundarpur village became a model for environmental sustainability and community action.
                </p>
                <div className="mt-4">
                  <Link href="/impact-stories/sundarpur" className="text-primary hover:text-primary-dark font-medium">
                    Read the story →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/stories/story3.jpg"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Women's Self-Help Group Success</h3>
                <p className="mt-2 text-sm text-gray-500">
                  How a group of 15 women created a thriving handicraft business that transformed their village economy.
                </p>
                <div className="mt-4">
                  <Link href="/impact-stories/self-help-group" className="text-primary hover:text-primary-dark font-medium">
                    Read their story →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/impact-stories" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
              View All Success Stories
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Want to support our programs?</span>
            <span className="block text-primary-light">Join us in creating positive change.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4 flex-wrap">
            <Link href="/get-involved/volunteer" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
              Volunteer With Us
            </Link>
            <Link href="https://rzp.io/rzp/cGixej34" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker">
              Support Our Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
