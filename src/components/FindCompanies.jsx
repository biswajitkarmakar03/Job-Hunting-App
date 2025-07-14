import React from "react";
import { Search, Star } from "lucide-react";
import coImg1 from "../assets/tcs.png";
import coImg2 from "../assets/apollo.png";
import coImg3 from "../assets/adani.png";
import coImg4 from "../assets/paytm.png";

const companies = [
  {
    name: "TCS",
    industry: "Information Technology ",
    rating: 4.8,
    description: "Delivering cutting-edge enterprise solutions to global clients.",
    logo: coImg1,
  },
  {
    name: "Apollo Hospitals",
    industry: "healthcare",
    rating: 4.6,
    description: "Revolutionizing diagnostics through artificial intelligence.",
    logo: coImg2,
  },
  {
    name: "Adani Power",
    industry: "Renewable Energy",
    rating: 4.5,
    description: "Empowering a cleaner future with solar and wind innovations.",
    logo: coImg3,
  },
  {
    name: "Paytm",
    industry: "Fintech",
    rating: 4.7,
    description: "Simplifying financial security through smart apps and insights.",
    logo: coImg4,
  },
  // Add more company objects as needed
];

const FindCompanies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Find the Best Companies
        </h1>
        <p className="text-gray-500 mt-3">
          Explore top-rated companies in tech, healthcare, finance, and more.
        </p>

        {/* Search Bar */}
        <div className="mt-6 relative w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by company name or industry..."
            className="w-full rounded-full border border-gray-300 py-3 px-5 pl-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-14 h-14 rounded-full mr-4 object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {company.name}
                </h2>
                <p className="text-sm text-gray-500">{company.industry}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {company.description}
            </p>
            <div className="flex items-center">
              <Star className="text-yellow-500" size={18} />
              <span className="ml-1 text-sm font-medium text-gray-700">
                {company.rating} / 5.0
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="bg-indigo-600 hover:bg-indigo-700 tracking-wide text-white px-8 py-3 rounded-full shadow-lg transition">
          View All Companies
        </button>
      </div>
    </div>
  );
};

export default FindCompanies;
