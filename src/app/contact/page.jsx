// app/get_involved/page.js
import ContactPage from './client';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Contact - N.A.V Yuva Foundation',
  description: 'Reach out to N.A.V Yuva Foundation for partnerships, volunteer opportunities, or to learn more about our community development initiatives.',
};

export default function Page() {
  return (
    <>
      <ContactPage/>
    </>
  );
}
