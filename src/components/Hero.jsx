import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative bg-white pt-24  h-screen pb-32 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse-slow z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse-slow z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-5xl pt-20 font-extrabold text-black uppercase animate-fade-in-up">
          Connecting Talent with Opportunity
        </h1>
        <p className="mt-6 text-2xl sm:text-2xl text-gray-700 max-w-2xl animate-fade-in-up delay-200">
          Discover opportunities that match your passion and skills.
        </p>

        {/* Search Bar with Icon */}
        <div className="mt-10 w-full max-w-xl animate-fade-in-up delay-300">
          <div className="flex bg-white shadow-lg rounded-full overflow-hidden border-2 border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-300">
            <input
              type="text"
              placeholder="Search for jobs, roles, or companies..."
              className="w-full px-6 py-3 text-lg text-gray-700 focus:outline-none"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 transition-colors flex items-center justify-center">
              <FiSearch className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
