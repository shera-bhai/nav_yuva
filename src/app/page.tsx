// app/page.js
'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import CallToAction from './components/sections/CallToAction';
import ImpactStatistics from './components/sections/ImpactStatistics';
import FeaturedPrograms from './components/sections/FeaturedPrograms';
import RecentActivities from './components/sections/RecentActivities';
import TestimonialSlider from './components/sections/TestimonialSlider';

// export const metadata = {
//   icons: {
//     icon: '/assets/navyf.png',
//     shortcut: '/assets/navyf.png',
//     apple: '/assets/navyf.png',
//   },
//   title: 'N.A.V Yuva Foundation - Empowering Communities, Transforming Lives',
//   description: 'A non-profit organization dedicated to uplifting the needy and poor through education, women empowerment, environmental initiatives, and youth development.',
// };

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing type
      once: false, // Whether animation should happen only once
      mirror: false,
    });
  }, []);

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
