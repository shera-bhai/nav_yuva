// app/resources/page.js

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Resources | N.A.V Yuva Foundation',
  description: 'Access educational materials, women empowerment guides, environmental resources, youth development tools, and more. Empowering communities through knowledge and support.',
};

export default function ResourcesPage() {
  // Educational Resources
  const educationalResources = [
    {
      title: "Academic Study Materials",
      description: "Free downloadable worksheets, textbooks, and study guides for primary and secondary education subjects including Mathematics, Science, English, and Hindi.",
      format: "PDF Downloads",
      audience: "Students, Teachers, Parents",
      tags: ["Education", "Academic", "Study Materials"],
      image: "/images/resources/academic-materials.jpg"
    },
    {
      title: "Career Guidance Handbook",
      description: "Comprehensive guide to various career paths, required qualifications, and opportunities available for rural youth in India.",
      format: "PDF Guide & Video Series",
      audience: "High School Students, Young Adults",
      tags: ["Career", "Guidance", "Youth Development"],
      image: "/images/resources/career-guidance.jpg"
    },
    {
      title: "Digital Literacy Curriculum",
      description: "Step-by-step modules for developing computer skills, internet safety, and using digital tools for education and entrepreneurship.",
      format: "Online Course & Printable Workbooks",
      audience: "All Age Groups",
      tags: ["Digital Skills", "Technology", "Computer Literacy"],
      image: "/images/resources/digital-literacy.jpg"
    }
  ];

  // Women Empowerment Resources
  const womenEmpowermentResources = [
    {
      title: "Financial Literacy Guide for Women",
      description: "Easy-to-understand guide covering basic financial concepts, savings strategies, and small business financial management.",
      format: "Illustrated Handbook & Workshop Materials",
      audience: "Women in Rural Communities",
      tags: ["Financial Literacy", "Women Empowerment", "Self-Help"],
      image: "/images/resources/financial-literacy.jpg"
    },
    {
      title: "Women's Health and Wellness Manual",
      description: "Comprehensive information on women's health, nutrition, hygiene, and accessing healthcare services in rural settings.",
      format: "Illustrated Guide & Audio Content",
      audience: "Women of All Ages",
      tags: ["Health", "Wellness", "Women's Rights"],
      image: "/images/resources/womens-health.jpg"
    },
    {
      title: "Self-Help Group Formation Toolkit",
      description: "Step-by-step guide for forming and managing women's self-help groups, including templates for record-keeping and meeting management.",
      format: "PDF Guide & Printable Forms",
      audience: "Community Organizers, Women Leaders",
      tags: ["Self-Help Groups", "Community Organization", "Leadership"],
      image: "/images/resources/self-help-groups.jpg"
    }
  ];

  // Environmental Resources
  const environmentalResources = [
    {
      title: "Sustainable Farming Practices Guide",
      description: "Detailed information on organic farming methods, crop rotation, water conservation, and natural pest management suitable for small-scale farmers.",
      format: "Illustrated Manual & Video Tutorials",
      audience: "Farmers, Agricultural Workers",
      tags: ["Sustainable Farming", "Agriculture", "Organic"],
      image: "/images/resources/sustainable-farming.jpg"
    },
    {
      title: "Tree Plantation and Care Handbook",
      description: "Guide to selecting appropriate tree species, planting techniques, and long-term care methods for successful afforestation efforts.",
      format: "PDF Guide & Mobile App",
      audience: "Community Volunteers, Schools",
      tags: ["Tree Plantation", "Afforestation", "Environmental Conservation"],
      image: "/images/resources/tree-plantation.jpg"
    },
    {
      title: "Waste Management Solutions",
      description: "Practical approaches to waste reduction, segregation, recycling, and composting for rural communities with limited waste management infrastructure.",
      format: "Illustrated Guide & Workshop Kit",
      audience: "Community Leaders, Households",
      tags: ["Waste Management", "Recycling", "Sustainability"],
      image: "/images/resources/waste-management.jpg"
    }
  ];

  // Youth Development Resources
  const youthDevelopmentResources = [
    {
      title: "Youth Parliament Toolkit",
      description: "Comprehensive guide to organizing and conducting youth parliament sessions, including role descriptions, debate formats, and mock legislation templates.",
      format: "Facilitator's Guide & Participant Workbooks",
      audience: "Youth Groups, Schools, Community Organizations",
      tags: ["Youth Parliament", "Civic Education", "Leadership"],
      image: "/images/resources/youth-parliament.jpg"
    },
    {
      title: "Debate and Public Speaking Manual",
      description: "Techniques and exercises to develop effective communication skills, structured arguments, and confident public speaking for youth participants.",
      format: "Training Manual & Practice Exercises",
      audience: "Students, Youth Leaders",
      tags: ["Public Speaking", "Debate", "Communication Skills"],
      image: "/images/resources/debate-speaking.jpg"
    },
    {
      title: "Sports Coaching Fundamentals",
      description: "Basic coaching principles, practice drills, and game organization guidelines for various sports accessible in rural settings with minimal equipment.",
      format: "Illustrated Guide & Training Videos",
      audience: "Community Coaches, Physical Education Teachers",
      tags: ["Sports", "Coaching", "Physical Education"],
      image: "/images/resources/sports-coaching.jpg"
    }
  ];

  // General Awareness Resources
  const generalAwarenessResources = [
    {
      title: "Health and Well-being",
      description: "Resources on maintaining physical and mental health, including preventive healthcare, nutrition guides, and stress management techniques.",
      format: "PDF Guides & Video Series",
      audience: "All Community Members",
      tags: ["Health", "Wellness", "Mental Health"],
      image: "/images/resources/health-wellbeing.jpg"
    },
    {
      title: "Digital Literacy",
      description: "Basic to advanced digital skills training, including internet safety, online communication, and protecting personal information.",
      format: "Online Modules & Printable Guides",
      audience: "All Age Groups",
      tags: ["Technology", "Digital Skills", "Internet Safety"],
      image: "/images/resources/digital-literacy.jpg"
    },
    {
      title: "Legal Awareness",
      description: "Simplified explanations of rights, laws, and procedures relevant to rural communities, including land rights, government schemes, and legal aid options.",
      format: "Illustrated Handbook & Audio Resources",
      audience: "All Community Members",
      tags: ["Legal Rights", "Civic Awareness", "Government Schemes"],
      image: "/images/resources/legal-awareness.jpg"
    }
  ];

  // Resource Categories for Navigation
  const resourceCategories = [
    {
      title: "Educational Resources",
      id: "education",
      resources: educationalResources
    },
    {
      title: "Women Empowerment",
      id: "women-empowerment",
      resources: womenEmpowermentResources
    },
    {
      title: "Environmental Initiatives",
      id: "environmental",
      resources: environmentalResources
    },
    {
      title: "Youth Development",
      id: "youth",
      resources: youthDevelopmentResources
    },
    {
      title: "General Awareness",
      id: "awareness",
      resources: generalAwarenessResources
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/resources-hero.jpg"
            alt="N.A.V Yuva Foundation Resources"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Resources
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Access free educational materials, guides, and resources to support community development, education, women empowerment, and environmental sustainability.
          </p>
          
          {/* Quick Navigation Links */}
          <div className="mt-10 flex justify-center flex-wrap gap-4">
            {resourceCategories.map((category, index) => (
              <a 
                key={index} 
                href={`#${category.id}`} 
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Empowering Communities Through Knowledge
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              N.A.V Yuva Foundation is committed to providing free, accessible resources that empower individuals and communities. Our materials are designed to be practical, culturally relevant, and easy to implement in rural and underserved settings.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-primary-light rounded-lg p-6 text-center">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-download"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Free Downloads</h3>
              <p className="mt-2 text-gray-600">All our resources are available free of charge and can be downloaded for offline use.</p>
            </div>
            
            <div className="bg-primary-light rounded-lg p-6 text-center">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-language"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Multilingual Content</h3>
              <p className="mt-2 text-gray-600">Resources available in Hindi, English, and regional languages to ensure accessibility.</p>
            </div>
            
            <div className="bg-primary-light rounded-lg p-6 text-center">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Implementation Support</h3>
              <p className="mt-2 text-gray-600">Contact us for guidance on implementing these resources in your community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories Sections */}
      {resourceCategories.map((category, categoryIndex) => (
        <div 
          key={categoryIndex} 
          id={category.id} 
          className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {category.title}
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Explore our collection of {category.title.toLowerCase()} designed to support community development and empowerment.
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {category.resources.map((resource, index) => (
                <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                  <div className="flex-shrink-0 relative h-48">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                      <p className="mt-3 text-base text-gray-500">{resource.description}</p>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-700"><span className="font-medium">Format:</span> {resource.format}</p>
                        <p className="text-sm text-gray-700"><span className="font-medium">Target Audience:</span> {resource.audience}</p>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Topics: </span>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {resource.tags.map((tag, idx) => (
                              <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                        Download Resource
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Workshop and Training Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Workshops & Training
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              In addition to downloadable resources, we offer in-person and virtual workshops to help communities implement these materials effectively.
            </p>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative md:w-1/3 h-64 md:h-auto">
                <Image
                  src="/images/resources/workshop.jpg"
                  alt="N.A.V Yuva Foundation Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">Upcoming Workshops</h3>
                <p className="mt-2 text-gray-600">
                  Our team conducts regular training sessions in various communities. These interactive workshops provide hands-on experience with our resources and personalized guidance for implementation.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-primary">•</span>
                    <span className="ml-2 text-gray-700">Teacher Training Workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-primary">•</span>
                    <span className="ml-2 text-gray-700">Youth Development Programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-primary">•</span>
                    <span className="ml-2 text-gray-700">Women's Self-Help Group Formation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-primary">•</span>
                    <span className="ml-2 text-gray-700">Environmental Conservation Training</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link 
                    href="/events" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
                  >
                    View Workshop Schedule
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Request Section */}
      <div className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Need a Specific Resource?
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                We're constantly developing new resources based on community needs. If you need materials on a specific topic, let us know and our team will work to create or source it.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Request a Resource
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Resource Feedback
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We continually improve our resources based on community feedback. Share your experience using our materials to help us enhance their effectiveness.
            </p>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <form action="#" method="POST">
                  <div>
                    <label htmlFor="resource" className="block text-sm font-medium text-gray-700">Resource Name</label>
                    <select id="resource" name="resource" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                      <option>Select a resource</option>
                      <option>Academic Study Materials</option>
                      <option>Career Guidance Handbook</option>
                      <option>Financial Literacy Guide</option>
                      <option>Women's Health Manual</option>
                      <option>Tree Plantation Guide</option>
                      <option>Youth Parliament Toolkit</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Your Feedback</label>
                    <textarea id="feedback" name="feedback" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Share your experience using this resource"></textarea>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address (optional)</label>
                    <input type="email" name="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="you@example.com" />
                  </div>
                  
                  <div className="mt-5">
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to make an impact?</span>
            <span className="block text-primary-light">Join our community initiatives.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
            <Link 
              href="/get-involved" 
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
            >
              Get Involved
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
