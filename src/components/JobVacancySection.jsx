const JobVacancySection = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      description:
        "We are looking for a skilled React developer to build responsive web apps.",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Git"],
    },
    {
      title: "Backend Developer",
      description:
        "Join our backend team to build robust APIs and services.",
      skills: ["Node.js", "Express", "MongoDB", "REST API", "Docker"],
    },
    {
      title: "UI/UX Designer",
      description:
        "Design beautiful and intuitive interfaces for our digital products.",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 text-left border-t-4 border-indigo-600 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Required Skills:</h4>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fancy Apply Button */}
              <button className="mt-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm  px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobVacancySection;
