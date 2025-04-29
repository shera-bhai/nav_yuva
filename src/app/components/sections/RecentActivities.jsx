// components/sections/RecentActivities.js
import Image from 'next/image';
import Link from 'next/link';

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      title: 'AAGAZ-E-JOSH',
      date: 'January 12, 2025',
      description: 'Organized a Sports Meet featuring multiple athletic events to encourage participation, teamwork, and physical fitness among students.',
      image: '/recent_activities/tree-plantation.jpg',
    },
    {
      id: 2,
      title: 'NAV YUVA CHHATRA SANSAD',
      date: 'March 22, 2025',
      description: 'Organized a Youth parliament for 200+ students to foster leadership and democratic values.',
      image: 'https://ik.imagekit.io/w57hznch1e/chhatra_sansad.jpg?updatedAt=1745841418397',
    },
    {
      id: 3,
      title: 'BLOOD DONATION CAMPAIGN',
      date: 'April 27, 2025',
      description: 'Conducted a blood donation drive to support local hospitals and raise awareness about the importance of donating blood.',
      image: 'https://ik.imagekit.io/w57hznch1e/blood_donation.jpeg?updatedAt=1745849593774',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Recent Activities
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Take a look at our recent initiatives and their impact on communities.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 relative h-80">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-center"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    {activity.date}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{activity.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            href="/programs#education-programs"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-[#23c5ca] transition duration-300 ease-in-out"
          >
            View All Activities
          </Link>
        </div>
      </div>
    </div>
  );
}
