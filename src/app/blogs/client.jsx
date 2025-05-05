// app/blog/page.js
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
  title: 'Blogs - N.A.V Yuva Foundation',
  description: 'Latest articles, success stories, and updates from our women empowerment initiatives.',
};

export default function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Shiksha Ki Amrit Yatra: A Journey of Knowledge with N.A.V Yuva Foundation',
      excerpt: 'Education plays a crucial role in providing direction and purpose in life. Our country boasts a rich heritage of educational resources, including insightful textbooks and ancient scriptures that have guided humanity for thousands of years.',
      image: '/assets/programs/education_initiative/career_counselling.jpg',
      date: 'June 15, 2023',
      slug: 'https://beeblogs.medium.com/shiksha-ki-amrit-yatra-a-journey-of-knowledge-with-n-a-v-yuva-foundation-c1c568bdaa28',
    },
    {
      id: 2,
      title: 'Creating Safe Spaces for Women in Rural Communities',
      excerpt: 'Our initiatives in rural areas are providing women with safe environments for growth and support.',
      image: '/assets/programs/education_initiative/career_counselling.jpg',
      date: 'July 10, 2023',
      slug: 'creating-safe-spaces-for-women',
    },
    {
      id: 3,
      title: 'The Impact of Mentorship on Young Women',
      excerpt: 'How our mentorship programs are shaping the future of young women in education and careers.',
      image: '/assets/programs/education_initiative/career_counselling.jpg',
      date: 'August 5, 2023',
      slug: 'impact-of-mentorship-young-women',
    },
  ];
  
  return (
    <div className="relative bg-gray-200">
      <div className='relative bg-black cursor-default'>
        <div className="h-24 md:h-44">
          <Image
            src="/assets/blogs/blogs.jpg"
            alt="Blogs | N.A.V Yuva Foundation"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Blogs
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Reach out to us to learn more about our initiatives or how you can contribute to our mission.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Program Retrospectives
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Explore updates, and reflections that highlight our ongoing efforts, community initiatives, and shared journeys toward positive social impact.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  {/* <p className="text-sm font-medium text-primary">
                    {post.date}
                  </p> */}
                  <Link href={`/blog/${post.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link
                    href={post.slug}
                    target='_blank'
                    className="font-medium inline-flex items-center hover:text-cyan-500 transition-all duration-300 ease-in-out"
                  >
                    Read Blog
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
