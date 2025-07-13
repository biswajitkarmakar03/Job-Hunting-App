import React from "react";

const jobOpenings = [
  {
    title: "Frontend Developer",
    description:
      "We are looking for a passionate Frontend Developer to design user-friendly interfaces using React.js.",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Backend Developer",
    description:
      "Join our backend team to build scalable APIs and manage databases efficiently.",
    skills: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive and engaging user interfaces and create seamless user experiences.",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
  },
  {
    title: "Digital Marketing Executive",
    description:
      "Manage and optimize marketing campaigns, social media presence, and improve online reach.",
    skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
  },
];

const CurrentJobOpenings = () => {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Current Job Openings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-black mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 uppercase">Required Skills</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {job.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 text-black text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="border border-black shadow-lg py-3 px-10 tracking-widest rounded-full transition hover:-translate-y-1">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentJobOpenings;
