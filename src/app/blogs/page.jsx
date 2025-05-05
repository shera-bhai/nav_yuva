// app/get_involved/page.js
import Blog from './client';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Blogs - N.A.V Yuva Foundation',
  description: 'Latest articles, success stories, and updates from our women empowerment initiatives.',
};

export default function Page() {
  return (
    <>
      <Blog/>
    </>
  );
}
