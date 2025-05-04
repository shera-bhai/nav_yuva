// app/about/page.js
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'About Us | N.A.V Yuva Foundation',
  description: 'Learn about our mission, vision, values, and the team behind our women empowerment initiatives.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Mr. Parveen Kumar',
      role: 'Director',
      image: '/assets/team/sumit.jpg',
      bio: 'With over 05 years of experience in social work, Sumit founded the organization with a vision to empower youth across all socioeconomic backgrounds.',
    },
    {
      name: 'Mr. Sumit Kumar',
      role: 'Director',
      image: 'https://ik.imagekit.io/w57hznch1e/sumit.png?updatedAt=1745921231117',
      bio: 'With over 05 years of experience in social work, Sumit founded the organization with a vision to empower youth across all socioeconomic backgrounds.',
    },
    {
      name: 'Siddharth Sahray',
      role: 'Outreach & PR Director',
      image: '/assets/team/michael.jpg',
      bio: 'Michael builds and maintains relationships with corporate partners, government agencies, and other NGOs to extend our reach.',
    },
    {
      name: 'Adv. Ankita Pandey',
      role: 'Head of Women Empowerment Wing',
      image: '/assets/team/sarah.jpg',
      bio: 'Sarah works directly with communities to understand their needs and implement tailored empowerment programs.',
    },
    {
      name: 'Ms. Mamta',
      role: 'Head of Blood Donation Wing',
      image: '/assets/team/sarah.jpg',
      bio: 'Sarah works directly with communities to understand their needs and implement tailored empowerment programs.',
    },
    {
      name: 'Mr. Deepak Nishal',
      role: 'Treasurer',
      image: '/assets/team/sarah.jpg',
      bio: 'Sarah works directly with communities to understand their needs and implement tailored empowerment programs.',
    },
    {
      name: 'Ms. Vandita',
      role: 'Human Resource Manager',
      image: '/assets/team/sarah.jpg',
      bio: 'Sarah works directly with communities to understand their needs and implement tailored empowerment programs.',
    },
    {
      name: 'Mr. Harsh Yadav',
      role: 'Chief Technical Head',
      image: 'https://ik.imagekit.io/w57hznch1e/harsh.png?updatedAt=1745849141518',
      bio: 'Harsh oversees all our programs and ensures they create meaningful impact in the lives of women we serve.',
    },
  ];

  return (
    <div className='cursor-default'>
      {/* Hero Section */}
      <div className="relative bg-black cursor-default">
        <div className="h-64 md:h-44">
          <Image 
            src="/assets/about/about.jpg" 
            alt="Our team working in the community" 
            fill 
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 opacity-80 text-xl text-white max-w-3xl mx-auto">
            Learn about our journey, mission, and vision to empowering youth and transforming communities.
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
          <div className="mt-10 text-lg text-gray-500 max-w-3xl mx-auto text-justify" data-aos="fade" data-aos-anchor-placement="center-bottom">
            <p className="mb-4">
            N.A.V Yuva Foundation was established on 31st October 2022 by Praveen Kumar with a vision: to reshape the future of our youth. Our primary mission is to catalyze the holistic development of an individual, equipping them with the skills and opportunities to thrive through diverse activities and events. 
            </p>
            <p className="mb-4">
            The foundation serves as a dynamic platform where youth can showcase their talents and potential to society, while also fostering a culture of social, ethical, and legal awareness. The dedication of this organisation is towards creating a more sensitive and informed community, where every young person recognizes their unique capabilities in overcoming modern challenges. In addition, N.A.V Yuva Foundation is committed to raising awareness among youth about the dangers of substance abuse, addiction, and negative influences. It advocates for a disciplined and responsible lifestyle that empowers young individuals to make informed choices and actively cultivate a sense of social responsibility within youth, inspiring them to become proactive contributors to the growth and development of society.  
            </p>
            <p>
            By aligning our efforts with the broader goal of empowering the underprivileged through education, youth development, women's empowerment, and sustainable initiatives, we envision a brighter, more equitable future for all.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-default" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
              <div className="relative h-80">
                <Image
                  src="/assets/about/mission.jpg"
                  alt="Our mission in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-justify">
                  N.A.V Yuva Foundation is committed to uplifting underserved communities by helping students access higher education, offering mentorship, and nurturing their growth beyond academics. Our rural programs support women’s legal and moral awareness, while initiatives like free meals and blood donation drives reflect our commitment to compassion. Together, our foundation is building a more inclusive and empowered society.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-default" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
              <div className="relative h-80">
                <Image
                  src="/assets/about/vision.jpg"
                  alt="Our vision for the future"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-justify">
                  N.A.V Yuva Foundation envision a world where every individual can thrive, free from the limits of poverty and inequality. Through an inclusive approach, we empower underserved youth and women with education, rights awareness, and guidance. Our goal is not just to support, but to transform lives. Guided by this belief, we proceed with compassion, integrity, and a vision of a more just, educated, and empowered society.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
            <div className="bg-white rounded-xl p-6 text-center shadow-xl">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto"  stroke="currentColor" viewBox="0 0 384 512">
                  <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We integrate traditional methods and innovative approach to solve the challenges of unprivileged population.
              </p>
            </div>
            <div className="bg-[#23c5caa5] rounded-xl p-6 text-center shadow-xl">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg> */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Co-operation</h3>
              <p className="text-gray-600">
                We do collaboration across different sectors, communities, and stakeholders to achieve shared goals.
              </p>
            </div>
            <div className="bg-primary rounded-xl p-6 text-center shadow-xl">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" stroke="currentColor" viewBox="0 0 640 512">
                  <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/>
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                  {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
                {/* </svg> */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600">
                N.A.V Yuva Foundation acts as a vital bridge between the community needs and effective actions.
              </p>
            </div>
            <div className="bg-[#23c5caa5] rounded-xl p-6 text-center shadow-xl">
              <div className="text-primary text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We plan drives and campaigns that supports environmental and social sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Reach and Presence */}

      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Reach and Presence
            </h2>
          </div>
          <div className="relative mt-10 flex flex-col gap-y-6">
            <div className='max-w-3xl mx-auto px-2 md:px-0 text-justify text-lg text-gray-500' data-aos="fade" data-aos-anchor-placement="bottom-bottom">
              <p>
                N.A.V Yuva Foundation has established a strong and growing presence more than across 12 States, with active initiatives in both rural and urban regions, building strong grassroots connections. Through consistent community engagement, strategic collaborations, inclusive programs, it has touched lives of thousands. The foundation's visible footprints reflects its commitment to Sustainable Development and transformative change at every level of society.
              </p>
            </div>
            <div className='flex justify-center items-center' data-aos="fade" data-aos-anchor-placement="center-bottom">
              <Image
                src="/assets/reach.png"
                alt='Our Reach and Presence'
                width={720}
                height={1080}
                priority
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Accreditation */}

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">
              N.A.V YUVA FOUNDATION
            </h2>
            <h1 className='text-2xl font-extrabold text-gray-900 sm:text-4xl'>
              IS ACCREDITED BY
            </h1>
          </div>
          <div className="relative mt-10">
            <div className='md:flex justify-center items-center gap-x-20 mx-auto px-2 md:px-0 text-justify text-lg text-gray-500'>
              <div className='mx-auto mb-6' data-aos="fade" data-aos-anchor-placement="bottom-bottom">
                <Image
                  src="/assets/about/unccd.png"
                  alt='Accreditation'
                  width={2350}
                  height={1080}
                  priority
                  className='object-contain'
                />
              </div>
              <p data-aos="fade" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
                N.A.V Yuva Foundation is proud to announce its official accreditation with the United Nations Convention to Combat Desertification (UNCCD), which represents a leading global authority on land and its sustainable management. This accreditation underscores our commitment to addressing environmental degradation and promoting sustainable practices. It reinforces our mission to foster balance within the ecosystem through initiating more environmental campaigns and encouraging the society to contribute to the same.
              </p>
            </div>
          </div>
          <div className="relative mt-10">
            <div className='md:flex justify-center items-center gap-x-20 mx-auto px-2 md:px-0 text-justify text-lg text-gray-500'>
              <div className='mx-auto mb-6' data-aos="fade" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
                <Image
                  src="/assets/about/ydc.png"
                  alt='Accreditation'
                  width={2800}
                  height={1080}
                  priority
                  className='object-contain'
                />
              </div>
              <p data-aos="fade" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
                We are pleased to announce that our organization has been officially accredited as a member of the Youth Democracy Cohort (YDC). This esteemed recognition underscores our commitment to empowering the voices of young individuals and promoting democratic values. As an accredited member, we are dedicated to fostering civic engagement, enhancing inclusivity, and providing a platform for youth to influence their communities and societies. This achievement reinforces our determination to advocate for constructive change and to create opportunities for young people to engage actively in the democratic process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      {/* <div className="py-16 bg-gray-100">
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
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
      </div> */}

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
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:text-[#23c5ca] mb-4 sm:mb-0 transition duration-300 ease-in-out"
              >
                Volunteer With Us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black transition duration-300 ease-in-out"
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