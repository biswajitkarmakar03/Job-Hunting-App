import React from 'react'

const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">
                  For Developers
                </h3>
                <p className="mt-2 mb-4">
                  Browse our react jobs and start your career  today
                </p>
                <a href="" className="inline-block bg-black text-white rounded-lg px-4 py-4 hover:bg-gray-800">
                  Browse Jobs
                </a>
             </div>
             <div className="bg-indigo-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-white">
                  For Developers
                </h3>
                <p className="mt-2 mb-4 text-white">
                  Browse our react jobs and start your career  today
                </p>
                <a href="" className="inline-block bg-white text-black rounded-lg px-4 py-4 hover:bg-gray-200">
                  Browse Jobs
                </a> 
             </div>
            </div>
        </div>
    </section>
  )
}

export default HomeCards