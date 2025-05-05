// app/get_involved/page.js
import GetInvolvedPage from './client';

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Get Involved - N.A.V Yuva Foundation',
  description: 'Join N.A.V Yuva Foundation as a volunteer, partner, or donor. Discover various ways to contribute to our mission of community development and empowerment.',
};

export default function Page() {
  return (
    <>
      <GetInvolvedPage/>
    </>
  );
}
