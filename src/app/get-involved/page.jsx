// app/get-involved/page.js

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Get Involved | NAV Yuva Foundation',
  description: 'Join NAV Yuva Foundation as a volunteer, partner, or donor. Discover various ways to contribute to our mission of community development and empowerment.',
};

export default function GetInvolvedPage() {
  const volunteerOpportunities = [
    {
      title: "Education Support Volunteer",
      description: "Help students with homework, teach basic subjects, and organize educational activities in underserved communities.",
      commitment: "4-8 hours per week",
      location: "Various village schools and community centers",
      skills: ["Teaching", "Patience", "Creativity"],
      image: "/assets/get_involved/volunteer/education.png"
    },
    {
      title: "Women Empowerment Program Facilitator",
      description: "Facilitate workshops on skill development, financial literacy, and entrepreneurship for women in rural areas.",
      commitment: "8-12 hours per month",
      location: "Community centers across multiple villages",
      skills: ["Communication", "Leadership", "Empathy"],
      image: "/assets/get_involved/volunteer/women.png"
    },
    {
      title: "Environmental Initiative Volunteer",
      description: "Participate in tree plantation drives, environmental awareness campaigns, and community clean-up activities.",
      commitment: "Weekend events and seasonal campaigns",
      location: "Various rural and semi-urban locations",
      skills: ["Physical fitness", "Environmental knowledge", "Teamwork"],
      image: "/assets/get_involved/volunteer/environment.png"
    },
    {
      title: "Health Camp Assistant",
      description: "Support medical professionals during health camps by managing registrations, guiding patients, and distributing medicines.",
      commitment: "Quarterly health camps (full-day events)",
      location: "Remote villages with limited healthcare access",
      skills: ["Organization", "Compassion", "Basic health knowledge"],
      image: "/images/volunteer/health.jpg"
    },
    {
      title: "Digital Content Creator",
      description: "Create engaging content for social media, website, and promotional materials to raise awareness about our initiatives.",
      commitment: "Flexible, can be done remotely",
      location: "Remote work with occasional field visits",
      skills: ["Writing", "Design", "Social media management"],
      image: "/images/volunteer/content.jpg"
    },
    {
      title: "Youth Program Coordinator",
      description: "Organize and facilitate youth development activities including sports events, leadership workshops, and cultural programs.",
      commitment: "8-16 hours per month",
      location: "Schools, community centers, and sports grounds",
      skills: ["Youth engagement", "Event management", "Mentorship"],
      image: "/images/volunteer/youth.jpg"
    }
  ];

  const partnershipTypes = [
    {
      title: "Corporate Partnerships",
      description: "Partner with us through CSR initiatives, employee volunteering programs, or sponsored projects to create sustainable impact in communities.",
      icon: "building"
    },
    {
      title: "Educational Institution Collaborations",
      description: "Schools, colleges, and universities can partner for joint community service programs, internships, research projects, and awareness campaigns.",
      icon: "academic"
    },
    {
      title: "NGO Alliances",
      description: "Collaborate with us to combine resources, expertise, and networks for greater impact through joint programs and knowledge sharing.",
      icon: "handshake"
    },
    {
      title: "Government Collaborations",
      description: "Work with us to implement community development programs aligned with government initiatives and public welfare schemes.",
      icon: "government"
    }
  ];

  const donationOptions = [
    {
      title: "One-time Donation",
      description: "Make a single contribution of any amount to support our ongoing programs and initiatives.",
      buttonText: "Donate Now"
    },
    {
      title: "Monthly Giving",
      description: "Become a sustaining donor with a monthly contribution that provides reliable support for our long-term programs.",
      buttonText: "Start Monthly Giving"
    },
    {
      title: "Sponsor a Child's Education",
      description: "Cover educational expenses for a child from an underserved community for a year, including books, supplies, and tuition support.",
      amount: "₹12,000 per year",
      buttonText: "Sponsor a Child"
    },
    {
      title: "Sponsor a Community Program",
      description: "Fund an entire community program such as a health camp, skill development workshop, or environmental initiative.",
      amount: "Starting at ₹25,000",
      buttonText: "Sponsor a Program"
    }
  ];

  const testimonials = [
    {
      quote: "Volunteering with NAV Yuva Foundation has been the most fulfilling experience of my life. Seeing the direct impact of our work on children's education is incredibly rewarding.",
      author: "Ananya Mehta",
      role: "Education Volunteer for 3 years",
      image: "/images/testimonials/volunteer1.jpg"
    },
    {
      quote: "Our corporate partnership with NAV Yuva Foundation has not only helped communities but also transformed our company culture. Our employees are more engaged and purpose-driven.",
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
        <div className="h-24 md:h-14">
          <Image
            src="/assets/get_involved/get_involved.jpg"
            alt="Get Involved with NAV Yuva Foundation"
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
            Join our mission to create positive change in rural communities. There are many ways to contribute, from volunteering your time to forming partnerships or making donations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#volunteer" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
              Volunteer
            </a>
            <a href="#partner" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker">
              Partner With Us
            </a>
            <a href="#donate" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
              Donate
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Volunteer Section */}
      <div id="volunteer" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Volunteer Opportunities
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Contribute your time, skills, and passion to make a meaningful difference in the lives of others. We have various volunteering opportunities to match your interests and availability.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {volunteerOpportunities.map((opportunity, index) => (
              <a href='/get-involved/volunteer' key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
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
                        <div className="mt-1 flex flex-wrap gap-2">
                          {opportunity.skills.map((skill, idx) => (
                            <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md  bg-cyan-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 ease-in-out">
                      Apply Now
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-500">
              Don't see a role that matches your skills? We're always looking for passionate individuals to join our cause.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-primary hover:bg-primary-dark">
              Contact Us About Volunteering
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div id="partner" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Form strategic partnerships with NAV Yuva Foundation to create sustainable impact in communities. We collaborate with various organizations to leverage collective strengths.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-primary-light rounded-md p-3">
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
                <div className="bg-gray-50 px-6 py-3">
                  <div className="text-sm">
                    <Link href="/contact" className="font-medium text-primary hover:text-primary-dark">
                      Discuss partnership opportunities →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
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
              Support Our Cause
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Your donations help us create lasting impact in underserved communities. Choose from various donation options that align with your giving preferences.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {donationOptions.map((option, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                  {option.amount && (
                    <p className="mt-2 text-lg font-medium text-primary">{option.amount}</p>
                  )}
                  <p className="mt-3 text-base text-gray-500">{option.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <Link href="/get-involved/donate" className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                    {option.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gray-50 rounded-lg overflow-hidden shadow">
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900">Corporate Social Responsibility</h3>
                <p className="mt-4 text-lg text-gray-500">
                  We work with businesses to design and implement impactful CSR programs that align with corporate values while addressing community needs. Our team can help you develop customized initiatives that create measurable social impact.
                </p>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                  Discuss CSR Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Supporters Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Hear from our volunteers, partners, and donors about their experiences working with NAV Yuva Foundation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="relative">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-primary-light opacity-30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-lg font-medium text-gray-700">
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
      </div>

      {/* Call to Action */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to make a difference?</span>
            <span className="block text-primary-light">Join us today and help transform lives.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/get-involved/volunteer" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                Become a Volunteer
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/get-involved/donate" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
