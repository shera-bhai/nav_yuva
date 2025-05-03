// components/sections/ImpactStatistics.js
export default function ImpactStatistics() {
  const stats = [
    { id: 1, stat: '1,50,000+', label: 'Lives Impacted' },
    { id: 2, stat: '150+', label: 'Villages Reached' },
    { id: 3, stat: '230+', label: 'Programs Conducted' },
    { id: 4, stat: '27,000+', label: 'Participants Gathered' },
  ];

  return (
    <div className="bg-gray-50 py-16 cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Reach So Far
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Real change happens when communities come together. Here's how NAV Yuva Foundation is making a difference.
          </p>
        </div>
        
        <div className="mt-10">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.id}
                className="group bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 text-center even:bg-primary transition duration-300 ease-in-out"
              >
                <dt className="text-sm font-medium  truncate group-hover:text-black transition duration-300 ease-in-out">{item.label}</dt>
                <dd className="mt-1 text-4xl font-extrabold text-primary">{item.stat}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
