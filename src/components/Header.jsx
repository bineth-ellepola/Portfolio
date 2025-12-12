import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";

const navLinks = ["home", "about", "skills", "projects", "contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="brand">
          <span className="brand-accent">B</span>ineth{" "}
          <span className="brand-accent">E</span>llepola
        </a>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} className="nav-link">
              {link}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="nav-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
