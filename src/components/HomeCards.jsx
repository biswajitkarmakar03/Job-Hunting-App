import React from 'react';
import { Briefcase, Code } from 'lucide-react'; // Optional icons

const HomeCards = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-xl lg:container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Developer Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Code className="text-indigo-600 w-8 h-8" />
              <h3 className="text-2xl font-semibold text-gray-800">For Developers</h3>
            </div>
            <p className="text-gray-600 mb-6">
               Discover remote and on-site React jobs, enhance your skills, and get hired by innovative companies worldwide.
            </p>
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium"
            >
              Find a Job
            </a>
          </div>

          {/* Recruiter Card */}
          <div className="bg-indigo-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-indigo-600 w-8 h-8" />
              <h3 className="text-2xl font-semibold">For Recruiters</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Post jobs, reach skilled React developers faster, and streamline your hiring process with our modern recruitment tools.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium"
            >
              Post a Job
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeCards;
