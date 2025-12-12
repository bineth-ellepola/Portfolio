import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} Bineth Ellepola. All rights reserved.
        </p>
        <a
          href="https://github.com/bineth-ellepola"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub /> <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
