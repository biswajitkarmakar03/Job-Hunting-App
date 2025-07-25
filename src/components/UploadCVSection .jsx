import React from 'react';

const UploadCVSection = () => {
  return (
    <section className="bg-indigo-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Let employers find you
          </h2>
          <p className="text-gray-600">
            Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.
          </p>
        </div>

        {/* Button */}
        <button className="bg-indigo-700 hover:bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
          Upload Your CV
        </button>
      </div>
    </section>
  );
};

export default UploadCVSection;
