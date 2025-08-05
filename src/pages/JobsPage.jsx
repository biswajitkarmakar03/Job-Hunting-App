import React, { useState } from 'react';

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    description: "Looking for a React.js expert with 2+ years experience.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CloudSphere",
    location: "Bangalore, India",
    type: "Part-time",
    description: "Node.js, MongoDB backend role, flexible hours.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "PixelPerfect",
    location: "Mumbai, India",
    type: "Freelance",
    description: "Need a creative designer for mobile apps.",
  },
    {
    id: 4,
    title: "HR Manager",
    company: "TechLife",
    location: "Remote",
    type: "Full-time",
    description: "Looking Talent Accusition Expert with 6+ years experience.",
  },
  {
    id: 5,
    title: "Customer Support Executive",
    company: "TeleFonix",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Need a Customer Support Exucutive with no proir experience, flexible hours.",
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "DataBricks",
    location: "Kolkata, India",
    type: "Full-Time",
    description: "Need a Data Analyst with the experience of 2 years.",
  },
];

const JobsPage = () => {
  const [filterType, setFilterType] = useState("All");

  const filteredJobs = filterType === "All"
    ? jobData
    : jobData.filter(job => job.type === filterType);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">All Job Listings</h2>

      <div className="max-w-md mx-auto mb-16">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Freelance">Freelance</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredJobs.map(job => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="mt-2 text-sm text-gray-600">{job.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                {job.type}
              </span>
              <a
                href={`/apply/${job.id}`}
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
