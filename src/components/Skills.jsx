// src/components/Skills.jsx
import React from 'react';

const skillsData = [
  { category: 'Front End', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Back End', tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
  { category: 'DevOps', tech: ['Docker', 'AWS'] },
  { category: 'AI/ML', tech: ['TensorFlow', 'PyTorch', 'Python'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-gray-100 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Technical Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group) => (
            <div 
              key={group.category} 
              className="bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transition duration-300 hover:shadow-blue-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tech.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-slate-700 text-gray-200 text-sm font-medium px-4 py-1 rounded-full border border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;