// src/components/Footer.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-400 py-6 border-t border-slate-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()} Bineth Ellepola. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/bineth-ellepola" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition duration-300 flex items-center space-x-1"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;