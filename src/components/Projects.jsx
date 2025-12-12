import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';


const projectData = [
{
title: 'E-commerce Platform',
desc: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
github: 'https://github.com/bineth-ellepola/ecom-project',
live: '#',
},
{
title: 'AI Image Generator',
desc: 'An application utilizing a large language model API to generate images based on text prompts.',
tech: ['Next.js', 'Python', 'TensorFlow', 'TypeScript'],
github: 'https://github.com/bineth-ellepola/ai-gen-tool',
live: '#',
},
];


const Projects = () => {
return (
<section id="projects" className="projects">
<div className="projects-inner">
<h2 className="section-title">Featured Projects</h2>


<div className="projects-grid">
{projectData.map((project, idx) => (
<article key={idx} className="project-card">
<h3 className="project-title">{project.title}</h3>
<p className="project-desc">{project.desc}</p>


<div className="project-tech">
{project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
</div>


<div className="project-actions">
<a href={project.github} target="_blank" rel="noopener noreferrer" className="btn small">
<FaGithub /> <span className="btn-text">GitHub</span>
</a>
{project.live !== '#' && (
<a href={project.live} target="_blank" rel="noopener noreferrer" className="btn outline small">
<FaExternalLinkAlt /> <span className="btn-text">Live Demo</span>
</a>
)}
</div>
</article>
))}
</div>
</div>
</section>
);
};


export default Projects;