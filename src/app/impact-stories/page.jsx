// app/impact-stories/page.js

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Impact Stories - N.A.V Yuva Foundation',
  description: 'Read inspiring stories of transformation and change from N.A.V Yuva Foundation\'s community development initiatives across rural India.',
};

export default function ImpactStoriesPage() {
  const featuredStories = [
    {
      id: 1,
      title: "From Dropout to Graduate: Meena's Journey",
      category: "Education",
      excerpt: "After dropping out in 8th grade due to financial constraints, Meena joined our education program and is now pursuing higher education.",
      image: "/images/stories/meena-story.jpg",
      date: "March 15, 2023",
      location: "Rampur Village, Uttar Pradesh"
    },
    {
      id: 2,
      title: "Transforming Livelihoods Through Skill Development",
      category: "Women Empowerment",
      excerpt: "How a group of 25 women from Chandpur village established a successful handicraft business with support from N.A.V Yuva Foundation.",
      image: "/images/stories/women-empowerment.jpg",
      date: "January 10, 2023",
      location: "Chandpur Village, Rajasthan"
    },
    {
      id: 3,
      title: "Green Revolution: 5000 Trees Planted in Drought-Prone Region",
      category: "Environment",
      excerpt: "Local youth and farmers collaborated to transform barren land into a green zone, improving soil quality and water retention.",
      image: "/images/stories/tree-plantation.jpg",
      date: "July 22, 2023",
      location: "Devpura District, Maharashtra"
    }
  ];

  const allStories = [
    {
      id: 4,
      title: "Digital Literacy Program Connects Remote Village to Opportunities",
      category: "Education",
      excerpt: "Our digital literacy initiative has connected over 100 students from remote villages to online education and employment opportunities.",
      image: "/images/stories/digital-literacy.jpg",
      date: "February 5, 2023",
      location: "Kalyanpur Village, Bihar"
    },
    {
      id: 5,
      title: "Sports Meet Nurtures Young Talent from Underserved Communities",
      category: "Youth Development",
      excerpt: "Annual sports meet discovers hidden athletic talent in rural areas, providing a platform for youth to showcase their abilities.",
      image: "/images/stories/sports-meet.jpg",
      date: "November 12, 2022",
      location: "Multiple Villages, Madhya Pradesh"
    },
    {
      id: 6,
      title: "Community Health Camp Serves 500+ Villagers",
      category: "Healthcare",
      excerpt: "Free health camp provided medical check-ups, medicines, and health education to villagers with limited access to healthcare facilities.",
      image: "/images/stories/health-camp.jpg",
      date: "October 3, 2023",
      location: "Surajpur District, Chhattisgarh"
    },
    {
      id: 7,
      title: "Youth Parliament Inspires Civic Engagement",
      category: "Leadership",
      excerpt: "Our youth parliament program is cultivating the next generation of community leaders through democratic participation and debate.",
      image: "/images/stories/youth-parliament.jpg",
      date: "August 15, 2023",
      location: "Various Schools, Delhi NCR"
    },
    {
      id: 8,
      title: "Food Distribution Drive Supports 200 Families During Pandemic",
      category: "Humanitarian Aid",
      excerpt: "Emergency food distribution initiative provided essential supplies to families affected by economic hardship during challenging times.",
      image: "/images/stories/food-distribution.jpg",
      date: "April 20, 2023",
      location: "Multiple Villages, Gujarat"
    },
    {
      id: 9,
      title: "Career Counseling Workshop Opens New Paths for Rural Students",
      category: "Education",
      excerpt: "Workshop connecting rural students with professionals helped 50+ high school students make informed decisions about their future.",
      image: "/images/stories/career-counseling.jpg",
      date: "September 5, 2023",
      location: "Govindpur, Jharkhand"
    },
  ];

  const testimonials = [
    {
      quote: "The N.A.V Yuva Foundation's education program changed my life. I never thought I would be able to continue my studies, but they supported me through everything. Today, I am the first graduate from my village.",
      author: "Priya Sharma",
      role: "Education Program Beneficiary",
      image: "/images/testimonials/priya.jpg"
    },
    {
      quote: "The skill development workshop gave me confidence and financial independence. I can now contribute to my family's income and have started teaching other women in my community.",
      author: "Lakshmi Devi",
      role: "Women Empowerment Program Participant",
      image: "/images/testimonials/lakshmi.jpg"
    },
    {
      quote: "Working with N.A.V Yuva Foundation on the tree plantation drive has transformed our village's environment. We're seeing better air quality and even some wildlife returning to the area.",
      author: "Ramesh Kumar",
      role: "Environmental Program Volunteer",
      image: "/images/testimonials/ramesh.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/impact-hero.jpg"
            alt="N.A.V Yuva Foundation Impact Stories"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Impact Stories
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Real stories of transformation and hope from the communities we serve. See how our programs are making a difference in people's lives.
          </p>
        </div>
      </div>

      {/* Featured Stories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Stories
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Highlighting remarkable journeys of individuals and communities who have benefited from our initiatives.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {featuredStories.map((story) => (
              <div key={story.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="flex-shrink-0 relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">
                      {story.category}
                    </p>
                    <Link href={`/impact-stories/${story.id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">
                        {story.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {story.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-0">
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">{story.date}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        {story.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Stories Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              More Impact Stories
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Explore the diverse ways N.A.V Yuva Foundation is creating positive change across communities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {allStories.map((story) => (
              <div key={story.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:transform hover:scale-105">
                <div className="flex-shrink-0 relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">
                      {story.category}
                    </p>
                    <Link href={`/impact-stories/${story.id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">
                        {story.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {story.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-0">
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">{story.date}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        {story.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Voices from the Community
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Hear directly from the people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-8 shadow-lg">
                <div className="relative text-lg font-medium text-gray-700">
                  <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative pl-10">{testimonial.quote}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0 relative h-12 w-12">
                    <Image
                      className="rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to make a difference?</span>
            <span className="block text-white">Join us in creating more impact stories.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/get_involved" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100">
                Get Involved
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/donate" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
