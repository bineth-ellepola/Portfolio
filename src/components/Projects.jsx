// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Placeholder data - REPLACE with your actual projects
const projectData = [
  {
    title: 'E-commerce Platform',
    desc: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/bineth-ellepola/ecom-project',
    live: '#', // Add live demo link if available
  },
  {
    title: 'AI Image Generator',
    desc: 'An application utilizing a large language model API to generate images based on text prompts.',
    tech: ['Next.js', 'Python', 'TensorFlow', 'TypeScript'],
    github: 'https://github.com/bineth-ellepola/ai-gen-tool',
    live: '#',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-gray-100 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-blue-500/30 hover:scale-[1.02] border border-slate-700"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                {project.live !== '#' && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;