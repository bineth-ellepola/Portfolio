import React from 'react';
import '../styles/skills.css';


const skillsData = [
{ category: 'Front End', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
{ category: 'Back End', tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
{ category: 'DevOps', tech: ['Docker', 'AWS'] },
{ category: 'AI/ML', tech: ['TensorFlow', 'PyTorch', 'Python'] },
];


const Skills = () => {
return (
<section id="skills" className="skills">
<div className="skills-inner">
<h2 className="section-title">Technical Stack</h2>


<div className="skills-grid">
{skillsData.map(group => (
<div key={group.category} className="skill-card">
<h3 className="skill-title">{group.category}</h3>
<div className="skill-tags">
{group.tech.map(skill => (
<span key={skill} className="skill-tag">{skill}</span>
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