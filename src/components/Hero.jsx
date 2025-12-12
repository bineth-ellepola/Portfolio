import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/hero.css';


const Hero = () => {
return (
<section id="home" className="hero">
<div className="hero-inner">
<p className="hero-sub">SLIIT Software Engineering Student</p>
<h1 className="hero-title">Hello, I'm <span className="accent">Bineth Ellepola</span></h1>
<h2 className="hero-lead">A passionate developer building high-quality, scalable applications.</h2>


<div className="hero-ctas">
<a href="#projects" className="btn primary">Explore My Projects</a>
<a href="https://github.com/bineth-ellepola" target="_blank" rel="noopener noreferrer" className="btn ghost">
<FaGithub /> <span className="btn-text">GitHub</span>
</a>
</div>
</div>
</section>
);
};


export default Hero;