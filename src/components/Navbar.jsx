import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';
import personalLogo from '../assets/logo/personal-logo.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}>
            <img
              src={personalLogo}
              alt="personal logo"
              className="sm:w-[85px] sm:h-[85px] w-[45px] h-[45px] object-contain"
            />
          </Link>
          
          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <a 
              href="https://github.com/michaelchinaka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transform hover:scale-110 transition-transform duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-eerieBlack hover:text-battleGray" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mchinaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transform hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-eerieBlack hover:text-battleGray" />
            </a>
            <a 
              href="/Michael_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-eerieBlack text-white rounded-full
              hover:bg-battleGray transition-all duration-300 hover:shadow-lg hover:scale-110"
              aria-label="Download CV"
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement('a');
                link.href = '/Michael_CV.pdf';
                link.download = 'Michael_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <HiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        <ul className="list-none hidden nav:flex flex-row gap-14">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="nav:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`p-6 bg-flashWhite fixed 
              top-0 left-0 w-screen h-screen z-10 menu ${
                toggle ? 'menu-open' : 'menu-close'
              }`}>
            <div className="flex justify-end">
              <img
                src={close}
                alt="close"
                className="w-[22px] h-[22px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <ul className="flex flex-col items-end pt-12 gap-8 pr-8">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-french' : 'text-eerieBlack'
                  } menu-item hover:text-taupe text-[21px] font-medium font-mova 
                    uppercase tracking-[3px] cursor-pointer nav-links
                    transition-all duration-300 hover:translate-x-[-8px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
