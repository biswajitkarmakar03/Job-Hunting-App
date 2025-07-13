import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center">
            {/* <img src={logo} alt="Logo" className="h-10 w-auto" /> */}
            <span className="text-indigo-900 text-2xl font-semibold ml-2">JobVerse</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-indigo-900 hover:text-indigo-600 transition">Home</Link>
            <Link to="/jobs" className="text-indigo-900 hover:text-indigo-600 transition">Jobs</Link>
            <Link to="/companies" className="text-indigo-900 hover:text-indigo-600 transition">Companies</Link>
            <Link to="/services" className="text-indigo-900 hover:text-indigo-600 transition">Services</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
