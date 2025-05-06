// app/get_involved/page.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Get Involved - N.A.V Yuva Foundation',
  description: 'Join N.A.V Yuva Foundation as a volunteer, partner, or donor. Discover various ways to contribute to our mission of community development and empowerment.',
};

export default function GetInvolvedPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const volunteerOpportunities = [
    {
      title: "Education Support Volunteer",
      description: "Assisting in academic learning, promote digital access, and foster holistic development to empower underprivileged students with consistent guidance and motivation.",
      commitment: "4-8 hours per week",
      location: "Various village schools and community centers",
      skills: ["Teaching", " Counselling", " Public Speaking"],
      image: "/assets/get_involved/volunteer/education.png"
    },
    {
      title: "Women Empowerment Program Facilitator",
      description: "Supporting awareness drives, skill-building sessions, and community engagement initiatives to strengthen women’s voices, self-reliance, and access to rights and opportunities.",
      commitment: "8-12 hours per month",
      location: "Community centers across multiple villages",
      skills: ["Public Speaking", "Counselling", "Event Management", "Leadership"],
      image: "/assets/get_involved/volunteer/women.png"
    },
    {
      title: "Environmental Conservation Volunteer",
      description: "Contributing to sustainable efforts through awareness campaigns, cleanliness drives, plantation activities, and community mobilization to promote eco-conscious living.",
      commitment: "Weekend events and seasonal campaigns",
      location: "Various rural and semi-urban locations",
      skills: ["Physical Fitness", "Environmental Knowledge", "Team Work"],
      image: "/assets/get_involved/volunteer/environment.png"
    },
    {
      title: "Digital Content Creator",
      description: "To develop engaging visuals and narratives to promote the foundation’s initiatives, playing a key role in enhancing outreach and digital impact.",
      commitment: "Flexible, can be done remotely",
      location: "Remote work with occasional field visits",
      skills: ["Content Writing", "Design", "Social Media Management", "Computer Skills"],
      image: "/assets/get_involved/volunteer/content_creator.png"
    },
    {
      title: "Meal Distribution Volunteer",
      description: "To assist in organizing and delivering nutritious meals to underserved communities and animals, ensuring dignity through compassionate service.",
      commitment: "3-5 hours per month",
      location: "Depends on the location availability",
      skills: ["Team Work", "Compassion", "Event Management"],
      image: "/assets/get_involved/volunteer/meal_distribution.png"
    },
    {
      title: "Youth Program Coordinator",
      description: "To lead and organize skill-building, educational, and recreational initiatives, empowering young individuals to grow, express, and lead with confidence.",
      commitment: "8-16 hours per month",
      location: "Schools, community centers, and sports grounds",
      skills: ["Youth Engagement", "Event Management", "Leadership", "Public Speaking"],
      image: "/assets/get_involved/volunteer/youth.png"
    }
  ];

  const partnershipTypes = [
    {
      title: "Corporate Partnerships",
      description: "Engage with us through CSR initiatives, employee volunteering, or sponsored projects to deliver sustainable and impactful solutions to communities.",
      icon: "building"
    },
    {
      title: "Educational Institution Collaborations",
      description: "Schools, colleges, and universities can engage in partnerships for service projects, internship opportunities, mentorship programs and awareness drives.",
      icon: "academic"
    },
    {
      title: "NGO Alliances",
      description: "Partner with us to amplify impact through shared knowledge, skills, and resources.",
      icon: "handshake"
    },
    {
      title: "Government Collaborations",
      description: "Collaborate with us to deliver community development initiatives that align with government programs and public welfare efforts.",
      icon: "government"
    }
  ];

  const donationOptions = [
    {
      title: "Non-Recurring Donation",
      description: "Contribute a one-time donation of any amount to support the continuation of our programs and initiatives.",
      buttonText: "Donate Now  →"
    },
    {
      title: "Recurring Donation",
      description: "Join us as a regular donor with a monthly contribution to offer ongoing support for our long-term initiatives.",
      buttonText: "Start Monthly Giving  →"
    },
    {
      title: "Support a Child's Education",
      description: "Sponsor a child's educational expenses for a year, covering books, supplies, and tuition for a child from an underserved community.",
      amount: "₹12,000 per year",
      buttonText: "Sponsor a Child  →"
    },
    {
      title: "Sponsor a Community Program",
      description: "Contribute to funding of an entire community program, including meal distribution, skill development workshops, or environmental initiatives.",
      amount: "Starting at ₹25,000",
      buttonText: "Sponsor a Program  →"
    }
  ];

  const testimonials = [
    {
      quote: "Volunteering with N.A.V Yuva Foundation has been the most fulfilling experience of my life. Seeing the direct impact of our work on children's education is incredibly rewarding.",
      author: "Ananya Mehta",
      role: "Education Volunteer for 3 years",
      image: "/images/testimonials/volunteer1.jpg"
    },
    {
      quote: "Our corporate partnership with N.A.V Yuva Foundation has not only helped communities but also transformed our company culture. Our employees are more engaged and purpose-driven.",
      author: "Rajiv Singh",
      role: "CSR Head, TechSolutions India",
      image: "/images/testimonials/partner1.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className='relative bg-black cursor-default'>
        <div className="h-30 md:h-14">
          <Image
            src="/assets/get_involved/get_involved.jpg"
            alt="Get Involved with N.A.V Yuva Foundation"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get Involved
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Become a part of N.A.V Yuva to contribute meaningfully towards empowering communities, fostering development, and driving sustainable social change from Volunteering your time to forming partnerships and making donations.
          </p>
          <div className="hidden mt-10 md:flex flex-wrap justify-center gap-4">
            <a href="#volunteer" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-[#23c5ca] hover:text-white transition-all duration-300 ease-in-out">
              Volunteer
            </a>
            <a href="#partner" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black transition-all duration-300 ease-in-out">
              Partner With Us
            </a>
            <a href="#donate" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-[#23c5ca] hover:text-white transition-all duration-300 ease-in-out">
              Donate
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Volunteer Section */}
      <div id="volunteer" className="py-16 bg-white cursor-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Volunteer Opportunities
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Meaningful volunteer opportunities for individuals who wish to contribute to social betterment. Offering various opportunities to match your interest & availability.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="flex-shrink-0 relative h-80">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{opportunity.description}</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-700"><span className="font-medium">Time Commitment:</span> {opportunity.commitment}</p>
                      <p className="text-sm text-gray-700"><span className="font-medium">Location:</span> {opportunity.location}</p>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Skills Needed: </span>
                        <div className="mt-1">
                          {opportunity.skills.map((skill, idx) => (
                            <p key={idx} className="inline-flex items-center pr-4.5 py-0.5 rounded-full text-xs font-medium">
                              {skill}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/get_involved/volunteer_registration" target='_blank' className="w-full cursor-pointer active:text-white active:bg-cyan-500 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md  bg-cyan-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 ease-in-out">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-500">
              Don't see a role that matches your skills? We're always looking for passionate individuals to join our cause.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center px-4 py-2 text-base font-medium rounded-md shadow-xl border border-gray-100  hover:text-white hover:bg-cyan-500 bg-white transition-all duration-300 ease-in-out">
              Contact Us About Volunteering
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div id="partner" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Form strategic partnerships with N.A.V Yuva Foundation to create sustainable impact in communities. We collaborate with various organizations to leverage collective strengths.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="bg-white overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-default">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md p-3">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {partnership.icon === "building" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        )}
                        {partnership.icon === "academic" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-4-2m4 2l4-2" />
                        )}
                        {partnership.icon === "handshake" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        )}
                        {partnership.icon === "government" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        )}
                      </svg>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">{partnership.title}</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">{partnership.description}</p>
                  </div>
                </div>
                <div className="bg-gray-200 px-6 py-3">
                  <div className="text-sm">
                    <Link href="mailto:contact@navyuva.org" className="font-medium hover:text-cyan-500 transition-all duration-300 ease-in-out">
                      Discuss partnership opportunities  →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-xl bg-white hover:text-white hover:bg-cyan-500 transition-all duration-300 ease-in-out">
              Explore Partnership Opportunities
            </Link>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div id="donate" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join Our Efforts
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Your contributions drive sustainable impact in underserved communities. Select from a range of donation options that best reflect your giving preferences.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {donationOptions.map((option, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-default">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                  {option.amount && (
                    <p className="mt-2 text-lg font-medium text-primary">{option.amount}</p>
                  )}
                  <p className="mt-3 text-base text-gray-500">{option.description}</p>
                </div>
                <div className="bg-gray-100 px-6 py-3">
                  <div className="text-sm">
                    <Link href="https://rzp.io/rzp/cGixej34" target='_blank' className="font-medium hover:text-cyan-500 transition-all duration-300 ease-in-out">
                      {option.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gray-100 rounded-lg overflow-hidden shadow">
            <div className="px-6 py-10 pt-8 sm:p-10">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900">Corporate Social Responsibility</h3>
                <p className="mt-8 text-lg text-gray-500 text-justify">
                We partner with businesses to create tailored CSR programs that align with corporate values and deliver measurable community impact. Our team provides end-to-end support in crafting customized programs that deliver measurable, lasting impact.
                </p>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-xl bg-white hover:text-white hover:bg-cyan-500 transition-all duration-300 ease-in-out">
                  Discuss CSR Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Supporters Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Gain firsthand perspectives from our partners and donors on their experiences collaborating with N.A.V Yuva Foundation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-default">
                <div className="p-8">
                  <div className="relative">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-primary-light opacity-30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative left-15 max-w-5/6 md:max-w-10/12 text-justify text-lg font-medium text-gray-700">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to make a difference?</span>
            <span className="block text-primary-light">Join us today and help transform lives.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md md:shadow">
              <Link href="/get_involved/volunteer_registration" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:text-[#23c5ca] transition duration-300 ease-in-out">
                Become a Volunteer
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md">
              <Link href="/get_involved/donate" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black transition duration-300 ease-in-out">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
