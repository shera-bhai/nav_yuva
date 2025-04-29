// app/blog/page.js
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Blog | NAV Yuva Foundation',
  description: 'Latest articles, success stories, and updates from our women empowerment initiatives.',
};

export default function Blog() {
  // In a production environment, this would be fetched from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Women Through Financial Literacy',
      excerpt: 'How our financial literacy program is helping women gain economic independence and security.',
      image: '/images/blog/financial-literacy.jpg',
      date: 'June 15, 2023',
      slug: 'empowering-women-through-financial-literacy',
    },
    {
      id: 2,
      title: 'Creating Safe Spaces for Women in Rural Communities',
      excerpt: 'Our initiatives in rural areas are providing women with safe environments for growth and support.',
      image: '/images/blog/safe-spaces.jpg',
      date: 'July 10, 2023',
      slug: 'creating-safe-spaces-for-women',
    },
    {
      id: 3,
      title: 'The Impact of Mentorship on Young Women',
      excerpt: 'How our mentorship programs are shaping the future of young women in education and careers.',
      image: '/images/blog/mentorship.jpg',
      date: 'August 5, 2023',
      slug: 'impact-of-mentorship-young-women',
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
        Blog & News
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
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
                <p className="text-sm font-medium text-primary">
                  {post.date}
                </p>
                <Link href={`/blog/${post.slug}`} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  Read full story 
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
  );
}
