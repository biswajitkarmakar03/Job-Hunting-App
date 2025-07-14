import React, { useState } from 'react';
import {
  Briefcase, Layers, Building2, Newspaper, ChevronDown, ChevronUp,
} from 'lucide-react';

const menuData = {
  Jobs: {
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    links: [
      { label: 'All Jobs', href: '#' },
      { label: 'Remote Jobs', href: '#' },
      { label: 'Internships', href: '#' },
      { label: 'Fresher Jobs', href: '#' },
    ],
  },
  Categories: {
    icon: <Layers className="w-5 h-5 text-green-600" />,
    links: [
      { label: 'Design', href: '#' },
      { label: 'Development', href: '#' },
      { label: 'Marketing', href: '#' },
      { label: 'Finance', href: '#' },
    ],
  },
  Companies: {
    icon: <Building2 className="w-5 h-5 text-purple-600" />,
    links: [
      { label: 'Top Companies', href: '#' },
      { label: 'Hiring Now', href: '#' },
      { label: 'Startups', href: '#' },
      { label: 'Company Reviews', href: '#' },
    ],
  },
  Blogs: {
    icon: <Newspaper className="w-5 h-5 text-yellow-600" />,
    links: [
      { label: 'Career Tips', href: '#' },
      { label: 'Interview Prep', href: '#' },
      { label: 'Resume Writing', href: '#' },
      { label: 'Industry News', href: '#' },
    ],
  },
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-700">Hiresy</div>

          {/* Desktop Menu Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8 relative">
            {Object.keys(menuData).map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setOpenMenu(menu)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                  {menu}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu */}
                <div
                  className={`${
                    openMenu === menu ? 'block' : 'hidden'
                  } absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-2xl rounded-xl p-6 w-[500px] grid grid-cols-2 gap-4 z-50`}
                >
                  <div className="col-span-2 flex items-center gap-2 text-lg font-semibold border-b pb-2">
                    {menuData[menu].icon}
                    <span>{menu}</span>
                  </div>
                  {menuData[menu].links.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setShowLoginModal(true)}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition"
            >
              Sign In / Sign Up
            </button>
            <button
              onClick={() => setShowLoginModal(true)}
              className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition">
              Add Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-2xl text-blue-700">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-inner px-4 pb-4 animate-fade-in">
            {Object.keys(menuData).map((menu) => (
              <div key={menu} className="border-b py-2">
                <button
                  onClick={() =>
                    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu)
                  }
                  className="w-full flex justify-between items-center font-medium text-gray-800 text-base"
                >
                  <div className="flex items-center gap-2">
                    {menuData[menu].icon}
                    {menu}
                  </div>
                  {openMobileDropdown === menu ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openMobileDropdown === menu && (
                  <div className="pl-6 mt-2 flex flex-col gap-2">
                    {menuData[menu].links.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="text-sm text-gray-700 hover:text-blue-600"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setShowLoginModal(true)}
                className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignupModal(true)}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Sign In Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999]">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative animate-fade-in">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
              Sign In
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-2 rounded-lg w-full focus:outline-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-4 py-2 rounded-lg w-full focus:outline-indigo-500"
              />
              <button className="bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition">
                Sign In
              </button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowSignupModal(true);
                  }}
                  className="text-indigo-700 font-semibold underline"
                >
                  Create Account
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999]">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative animate-fade-in">
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
              Create Account
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border px-4 py-2 rounded-lg w-full focus:outline-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-2 rounded-lg w-full focus:outline-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-4 py-2 rounded-lg w-full focus:outline-indigo-500"
              />
              <button className="bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition">
                Create Account
              </button>
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setShowSignupModal(false);
                    setShowLoginModal(true);
                  }}
                  className="text-indigo-700 font-semibold underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
