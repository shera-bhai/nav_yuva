// app/page.js
import Hero from './components/sections/Hero';
import ImpactStatistics from './components/sections/ImpactStatistics';
import FeaturedPrograms from './components/sections/FeaturedPrograms';
import RecentActivities from './components/sections/RecentActivities';
import TestimonialSlider from './components/sections/TestimonialSlider';
import CallToAction from './components/sections/CallToAction';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'NAV Yuva Foundation - Empowering Communities, Transforming Lives',
  description: 'A non-profit organization dedicated to uplifting the needy and poor through education, women empowerment, environmental initiatives, and youth development.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStatistics />
      <FeaturedPrograms />
      <RecentActivities />
      <TestimonialSlider />
      <CallToAction />
    </main>
  );
}
