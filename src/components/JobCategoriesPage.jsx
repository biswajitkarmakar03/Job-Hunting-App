import React from "react";
import { Briefcase, Code, Paintbrush, LineChart, Hammer, Users } from "lucide-react";

const categories = [
  { name: "Software Development", icon: <Code />, jobs: 124 },
  { name: "Design & Creative", icon: <Paintbrush />, jobs: 75 },
  { name: "Marketing & Sales", icon: <LineChart />, jobs: 88 },
  { name: "Construction & Engineering", icon: <Hammer />, jobs: 42 },
  { name: "Human Resources", icon: <Users />, jobs: 58 },
  { name: "General Management", icon: <Briefcase />, jobs: 33 },
];

const JobCategoriesPage = () => {
  return (
    <section className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">Explore Job Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:bg-blue-50"
            >
              <div className="text-blue-600 mb-4 text-4xl">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.jobs}+ Jobs Available</p>
            </div>
          ))}
        </div>
      </div>
       <div className="mt-20 flex justify-center">
        <button className="border border-black text-black px-32 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 tracking-widest">
          View Jobs Categories
        </button>
      </div>
    </section>
  );
};

export default JobCategoriesPage;
