// app/about/page.js
import AboutPage from "./client";

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'About Us - N.A.V Yuva Foundation',
  description: 'Learn about our mission, vision, values, and the team behind our women empowerment initiatives.',
};

export default function Page() {
  return (
    <>
      <AboutPage/>
    </>
  );
}