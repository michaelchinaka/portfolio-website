import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({ name, description, image, repo, demo, tags, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="bg-jetLight p-5 rounded-2xl w-[360px] h-[600px] flex flex-col">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        {repo && (
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(repo, '_blank')}
              className="bg-night w-10 h-10 rounded-full flex justify-center 
              items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]">
              <img
                src={github}
                alt="source code"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-timberWolf font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-silver text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag}`}
            className="bg-white px-3 py-1 rounded-full text-[14px] text-black font-medium">
            {tag}
          </p>
        ))}
      </div>

      {demo && (
        <button
          className="live-demo flex justify-between 
          text-[14px] text-timberWolf font-bold font-beckman 
          items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 
          w-[125px] h-[46px] rounded-[10px] glassmorphism 
          mt-[16px] hover:bg-battleGray hover:text-eerieBlack 
          transition duration-[0.2s] ease-in-out"
          onClick={() => window.open(demo, '_blank')}
          onMouseOver={() => {
            document
              .querySelector('.btn-icon')
              .setAttribute('src', pineappleHover);
          }}
          onMouseOut={() => {
            document
              .querySelector('.btn-icon')
              .setAttribute('src', pineapple);
          }}>
          <img
            src={pineapple}
            alt="pineapple"
            className="btn-icon w-[30px] h-[30px] object-contain"
          />
          LIVE DEMO
        </button>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full flex flex-col items-center mt-[50px]">
        {/* First row - 3 projects */}
        <div className="flex justify-center gap-7 mb-7">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
        {/* Second row - 2 projects */}
        <div className="flex justify-center gap-7">
          {projects.slice(3, 5).map((project, index) => (
            <ProjectCard key={project.id} index={index + 3} {...project} />
          ))}
        </div>

        {/* Portfolio Banner */}
        <motion.div
          variants={fadeIn('up', 'spring', 6 * 0.5, 1)}
          className="mt-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-silver text-[20px] italic">
            And of course...
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-2">
            <span className="text-timberWolf font-bold text-[24px]">
              This Website
            </span>
            <p className="mt-2 text-taupe text-[16px]">
              Built with React and Tailwind CSS
            </p>
            <a
              href="https://github.com/michaelchinaka/Portfolio-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-silver hover:text-timberWolf transition-colors duration-300 text-[14px]">
              View Source
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
