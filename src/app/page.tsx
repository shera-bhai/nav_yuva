// app/page.js
import Home from './client';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Nurturing Aide Valuing Yuva Foundation - N.A.V Yuva Foundation',
  description: 'A non-profit organization dedicated to uplifting the needy and poor through education, women empowerment, environmental initiatives, and youth development.',
};

export default function Page() {
  return (
    <>
      <Home/>
    </>
  );
}
