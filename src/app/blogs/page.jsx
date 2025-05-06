// app/get_involved/page.js
import Blog from './client';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Blogs - N.A.V Yuva Foundation',
  description: 'Stay informed and inspired with our latest updates, stories, and insights on our blog.',
};

export default function Page() {
  return (
    <>
      <Blog/>
    </>
  );
}
