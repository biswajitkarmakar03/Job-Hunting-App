import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: '4M',
      label: '4 million daily active users',
    },
    {
      value: '12k',
      label: 'Over 12k open job positions',
    },
    {
      value: '20M',
      label: 'Over 20 million stories shared',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-indigo-700">{stat.value}</h2>
            <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
