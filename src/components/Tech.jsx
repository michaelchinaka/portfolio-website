import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const TechCard = ({ icon, name }) => {
  return (
    <motion.div
      className="w-28 h-32 rounded-xl bg-jetLight p-4 flex flex-col items-center justify-center
                 hover:shadow-card cursor-pointer transition-all duration-300
                 hover:bg-battleGray hover:bg-opacity-20 group"
      whileHover={{ scale: 1.05, rotate: 360 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <img src={icon} alt={name} className="w-full h-full object-contain group-hover:filter group-hover:brightness-110" />
      </div>
      <p className="text-[14px] text-taupe text-center mt-4 group-hover:text-timberWolf transition-colors duration-300">
        {name}
      </p>
    </motion.div>
  );
};

const TechCategory = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h3 className="text-[24px] font-bold text-timberWolf mb-8">{title}</h3>
      <div className="flex flex-wrap justify-start gap-10">
        {items.map((technology) => (
          <TechCard
            key={technology.name}
            {...technology}
          />
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  const categories = {
    'Programming & Development': technologies.filter(tech => tech.category === 'programming'),
    'Cloud & DevOps': technologies.filter(tech => tech.category === 'devops'),
    'Data & Machine Learning': technologies.filter(tech => tech.category === 'data'),
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-14">
        {Object.entries(categories).map(([category, items]) => (
          <TechCategory key={category} title={category} items={items} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
