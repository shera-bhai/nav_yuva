// app/volunteer-registration/page.js
import VolunteerRegistrationPage from './form.jsx'

export const metadata = {
  icons: {
    icon: '/assets/navyf.png',
    shortcut: '/assets/navyf.png',
    apple: '/assets/navyf.png',
  },
  title: 'Volunteer Registration - N.A.V Yuva Foundation',
  description: 'Join N.A.V Yuva Foundation as a volunteer and contribute to community development, education, women empowerment, and environmental initiatives.',
};

export default function VolunteerForm() {
  return (
    <>
      <VolunteerRegistrationPage/>
    </>
  )
}