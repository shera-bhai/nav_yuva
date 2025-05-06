// app/about/page.js
import AboutPage from "./client";

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'About Us - N.A.V Yuva Foundation',
  description: 'Learn about our mission, values, and the impact we’re making in communities through sustainable development and empowerment',
};

export default function Page() {
  return (
    <>
      <AboutPage/>
    </>
  );
}