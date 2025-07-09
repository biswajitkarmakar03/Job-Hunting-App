import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-indigo-800 border-b border-indigo-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-white text-2xl font-semibold ml-2">Opportuna</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-indigo-300 transition">Home</Link>
            <Link to="/jobs" className="text-white hover:text-indigo-300 transition">Jobs</Link>
            <Link to="/companies" className="text-white hover:text-indigo-300 transition">Companies</Link>
            <Link to="/services" className="text-white hover:text-indigo-300 transition">Services</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
