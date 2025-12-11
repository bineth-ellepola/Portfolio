// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo/Name */}
        <a href="#home" className="text-xl font-bold text-gray-100 hover:text-blue-500 transition duration-300">
          <span className="text-blue-500">B</span>ineth <span className="text-blue-500">E</span>llepola
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link}`} 
              className="text-gray-300 capitalize hover:text-blue-500 transition duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-100 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-slate-800 border-t border-slate-700">
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link}`} 
                  className="block text-gray-100 capitalize hover:text-blue-500 py-2 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;