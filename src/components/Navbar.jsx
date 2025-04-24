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
      <div className="w-full flex justify-between items-center px-8">
        <div className="flex items-center gap-16">
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
          <div className="flex gap-8 items-center">
            <a 
              href="https://github.com/michaelchinaka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transform hover:scale-110 transition-transform duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-10 h-10 text-eerieBlack hover:text-battleGray" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mchinaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transform hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-10 h-10 text-eerieBlack hover:text-battleGray" />
            </a>
            <a 
              href="/Michael_Chinaka_CV.pdf"
              download
              className="flex items-center justify-center w-10 h-10 bg-eerieBlack text-white rounded-full
              hover:bg-battleGray transition-all duration-300 hover:shadow-lg hover:scale-110"
              aria-label="Download CV"
            >
              <HiDownload className="w-6 h-6" />
            </a>
          </div>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-14">
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
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
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
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
