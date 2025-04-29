// app/about/page.js
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'About Us | NAV Yuva Foundation',
  description: 'Learn about our mission, vision, values, and the team behind our women empowerment initiatives.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Mr. Sumit Kumar',
      role: 'Founder & Executive Director',
      image: '/assets/team/sumit.jpg',
      bio: 'With over 05 years of experience in social work, Sumit founded the organization with a vision to empower youth across all socioeconomic backgrounds.',
    },
    {
      name: 'Mr. Harsh Yadav',
      role: 'Technical Director',
      image: 'https://ik.imagekit.io/w57hznch1e/harsh.png?updatedAt=1745849141518',
      bio: 'Harsh oversees all our programs and ensures they create meaningful impact in the lives of women we serve.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Partnerships Manager',
      image: '/assets/team/michael.jpg',
      bio: 'Michael builds and maintains relationships with corporate partners, government agencies, and other NGOs to extend our reach.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Community Outreach Coordinator',
      image: '/assets/team/sarah.jpg',
      bio: 'Sarah works directly with communities to understand their needs and implement tailored empowerment programs.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <Image 
            src="/images/about-hero.jpg" 
            alt="Our team working in the community" 
            fill 
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Learn about our journey, mission, and the passionate team dedicated to empowering women and transforming communities.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
          </div>
          <div className="mt-10 text-lg text-gray-500 max-w-3xl mx-auto">
            <p className="mb-4">
              NAV Yuva Foundation was founded in 2010 by Anita Sharma, who recognized the need for targeted support for women facing various challenges in both urban and rural communities.
            </p>
            <p className="mb-4">
              What began as a small initiative with workshops for 20 women in a local community center has now grown into a comprehensive organization reaching thousands of women across multiple regions.
            </p>
            <p>
              Over the years, we have expanded our programs to address the diverse needs of women, from economic empowerment and education to healthcare access and leadership development. Our holistic approach ensures that women receive the support they need to thrive in all aspects of life.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/mission.jpg"
                  alt="Our mission in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower women through education, skill development, and advocacy, enabling them to achieve economic independence, exercise their rights, and participate fully in society.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/vision.jpg"
                  alt="Our vision for the future"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  A world where all women have equal opportunities, rights, and access to resources, enabling them to lead dignified lives and contribute to building inclusive, equitable communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#23c5ca] rounded-lg p-6 text-center">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We respect and value diversity, ensuring our programs are accessible to women from all backgrounds.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain transparency, accountability, and ethical standards in all our operations.
              </p>
            </div>
            <div className="bg-[#23c5ca] rounded-lg p-6 text-center">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Empathy</h3>
              <p className="text-gray-600">
                We approach our work with compassion, understanding the unique challenges faced by the women we serve.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We design programs that create lasting impact and empower communities to sustain positive change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Dedicated professionals committed to creating positive change in the lives of women.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Inspired by our mission?</span>
            <span className="block text-secondary">Join our team or volunteer with us.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/get-involved/volunteer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Volunteer With Us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}