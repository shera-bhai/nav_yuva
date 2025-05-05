// app/programs/page.js
import ProgramsPage from "./client";

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Programs - N.A.V Yuva Foundation',
  description: 'Explore N.A.V Yuva Foundation\'s diverse programs focused on education, women empowerment, environmental conservation, health initiatives, and youth development.',
};

export default function Programs() {
  return (
    <>
      <ProgramsPage/>
    </>
  );
}
