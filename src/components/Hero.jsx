// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-slate-900 flex items-center justify-center text-gray-100 pt-20 p-4"
    >
      <div className="text-center max-w-4xl px-4">
        <p className="text-cyan-400 text-lg font-semibold mb-2">
          SLIIT Software Engineering Student
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Hello, I'm <span className="text-blue-500">Bineth Ellepola</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
          A passionate developer building high-quality, scalable applications.
        </h2>
        
        <div className="flex justify-center space-x-4 mb-10">
          <a 
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30"
          >
            Explore My Projects
          </a>
          <a 
            href="https://github.com/bineth-ellepola" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 border-2 border-slate-600 hover:border-blue-500 text-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300 hover:text-blue-500"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;