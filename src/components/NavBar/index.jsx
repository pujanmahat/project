import React from 'react';
import { NavLink } from 'react-router-dom';

const index = () => {
  return (
    <nav className="flex h-[74px] items-center justify-between bg-[#1F3B73] px-4 text-white">
     
      <div className="flex items-center text-lg font-bold">Logo</div>

  
      <div className="hidden items-center space-x-6 md:flex">
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-200'} hover:text-orange-700`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Features"
              className={({ isActive }) =>
                `block px-4 py-2 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-200'} hover:text-orange-700`
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                `block px-4 py-2 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-200'} hover:text-orange-700`
              }
            >
              Sign in
            </NavLink>
          </li>
        </ul>
      </div>

      
      <button className="focus:outline-none md:hidden">
       
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round"
           strokeLinejoin="round" 
           strokeWidth="2" 
           d="M4 6h16M4 12h16M4 18h16">

          </path>
        </svg>
      </button>
    </nav>
  );
};

export default index;
