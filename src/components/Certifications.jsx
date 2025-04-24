import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { ibm } from '../assets';

const certifications = [
  {
    title: "Docker Essentials",
    url: "https://www.credly.com/badges/d996477d-3eae-4f45-a1bc-caa3cbe95751/linked_in_profile",
    icon: ibm
  },
  {
    title: "Python for Data Science",
    url: "https://www.credly.com/badges/706cd794-8fac-4f1f-b2d8-5875ee3284c4/linked_in_profile",
    icon: ibm
  },
  {
    title: "Spark Level 1",
    url: "https://www.credly.com/badges/1c88a7b2-5eb7-4d51-a8ff-95d652e3307c/linked_in_profile",
    icon: ibm
  },
  {
    title: "IBM Agile Explorer",
    url: "https://www.credly.com/badges/24d4965c-b339-4d55-a00e-c1b64db8d692/linked_in_profile",
    icon: ibm
  }
];

const CertificationCard = ({ index, title, url, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="relative flex items-center justify-center">
      <div className="group relative">
        <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center
                      transform transition-all duration-300 group-hover:scale-110
                      shadow-lg hover:shadow-xl cursor-pointer">
          <a href={url} target="_blank" rel="noopener noreferrer"
             className="block w-full h-full rounded-full overflow-hidden
                        flex items-center justify-center">
            <img
              src={icon}
              alt={title}
              className="w-32 h-32 object-contain transform transition-transform
                         duration-300 group-hover:scale-110"
            />
          </a>
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full">
          <p className="text-center text-[16px] text-taupe font-semibold">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-20 justify-center items-center">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.title}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications"); 