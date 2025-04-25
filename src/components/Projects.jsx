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
      className="bg-jetLight p-4 sm:p-5 rounded-2xl w-full min-h-[500px] flex flex-col">
      <div className="relative w-full h-[200px] sm:h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        {repo && (
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(repo, '_blank')}
              className="bg-night w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center 
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

      <div className="mt-4 sm:mt-5 flex-grow">
        <h3 className="text-timberWolf font-bold text-[20px] sm:text-[24px]">{name}</h3>
        <p className="mt-2 text-silver text-[12px] sm:text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag}`}
            className="bg-white px-2 sm:px-3 py-1 rounded-full text-[12px] sm:text-[14px] text-black font-medium">
            {tag}
          </p>
        ))}
      </div>

      {demo && (
        <button
          className="live-demo flex justify-between 
          text-[12px] sm:text-[14px] text-timberWolf font-bold font-beckman 
          items-center py-4 sm:py-5 pl-2 pr-3 whitespace-nowrap gap-1 
          w-[115px] sm:w-[125px] h-[40px] sm:h-[46px] rounded-[10px] glassmorphism 
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
            className="btn-icon w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] object-contain"
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
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-[50px]">
        <p className={`${styles.sectionSubText} px-4 sm:px-0`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight} px-4 sm:px-0`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex px-4 sm:px-0 mb-[50px]">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-taupe text-[16px] sm:text-[18px] max-w-3xl leading-[30px]">
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
        viewport={{ once: true, amount: 0.1 }}
        className="w-full flex flex-col items-center">
        {/* Responsive grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              index={index} 
              {...project} 
            />
          ))}
        </div>

        {/* Portfolio Banner */}
        <motion.div
          variants={fadeIn('up', 'spring', 6 * 0.5, 1)}
          className="mt-20 mb-20 text-center px-4 sm:px-0 w-full"
          viewport={{ once: true, amount: 0.1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-silver text-[18px] sm:text-[20px] italic">
            And of course...
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-2">
            <span className="text-timberWolf font-bold text-[20px] sm:text-[24px]">
              This Website
            </span>
            <p className="mt-2 text-taupe text-[14px] sm:text-[16px]">
              Built with React and Tailwind CSS
            </p>
            <a
              href="https://github.com/michaelchinaka/Portfolio-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-silver hover:text-timberWolf transition-colors duration-300 text-[12px] sm:text-[14px]">
              View Source
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
