// app/get-involved/page.js

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
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
      image: "/images/volunteer/education.jpg"
    },
    {
      title: "Women Empowerment Program Facilitator",
      description: "Facilitate workshops on skill development, financial literacy, and entrepreneurship for women in rural areas.",
      commitment: "8-12 hours per month",
      location: "Community centers across multiple villages",
      skills: ["Communication", "Leadership", "Empathy"],
      image: "/images/volunteer/women-empowerment.jpg"
    },
    {
      title: "Environmental Initiative Volunteer",
      description: "Participate in tree plantation drives, environmental awareness campaigns, and community clean-up activities.",
      commitment: "Weekend events and seasonal campaigns",
      location: "Various rural and semi-urban locations",
      skills: ["Physical fitness", "Environmental knowledge", "Teamwork"],
      image: "/images/volunteer/environment.jpg"
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
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/get-involved-hero.jpg"
            alt="Get Involved with NAV Yuva Foundation"
            fill
            className="object-cover opacity-30"
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
          <div className="mt-10 flex justify-center space-x-4">
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
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="flex-shrink-0 relative h-48">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    fill
                    className="object-cover"
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
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-500">
              Don't see a role that matches your skills? We're always looking for passionate individuals to join our cause.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
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

          <div className="mt-