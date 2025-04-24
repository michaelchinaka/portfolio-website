import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-battleGray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:chinakam@icloud.com"
              className="text-white hover:text-eerieBlack transition-colors duration-300 flex items-center gap-2"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>chinakam@icloud.com</span>
            </a>
            <a
              href="tel:+447395262275"
              className="text-white hover:text-eerieBlack transition-colors duration-300 flex items-center gap-2"
            >
              <FaPhone className="w-5 h-5" />
              <span>+447395262275</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/mchinaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-eerieBlack transition-colors duration-300 flex items-center gap-2"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/michaelchinaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-eerieBlack transition-colors duration-300 flex items-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="text-sm text-white/80 mt-4">
            © {new Date().getFullYear()} Michael Chinaka. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 