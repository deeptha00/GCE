import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-5 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-5 text-center">
        <h1 className="m-0 mb-5 text-2xl text-[#3C6E1F] font-sans">GreenCleanEarth.org</h1>
        <nav className="nav">
          <ul className="list-none p-0 m-0 flex flex-wrap justify-center">
            <li className="m-0 mx-2.5">
              <Link to="/" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Home
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/projects" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Projects
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/competition" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Competition
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/register" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Register
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/login" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Login
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/events" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Events & News
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/get-plant" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Get Plant
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/group-list" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Group List
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/participant-list" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Participant List
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/faq" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                FAQ
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/result" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Result
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/about" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                About Us
              </Link>
            </li>
            <li className="m-0 mx-2.5">
              <Link to="/contact" className="text-gray-800 no-underline p-1.5 rounded-full transition-colors duration-300 hover:bg-green-600 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
