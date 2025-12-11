import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-gray-100 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">
          About Me
        </h2>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-shadow duration-500">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I am <strong>Bineth Ellepola</strong>, a dedicated Software Engineering student at <strong>SLIIT Campus, Malabe</strong>. My journey into technology is driven by a strong passion for solving complex problems and building efficient, attractive digital solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> and am actively exploring modern frameworks like <strong>Next.js</strong> and containerization with <strong>Docker</strong>. I believe in clean code, robust architecture, and continuous learning to stay ahead in the evolving tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
