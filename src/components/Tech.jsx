import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const TechCategory = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h3 className="text-[24px] font-bold text-timberWolf mb-8">{title}</h3>
      <div className="flex flex-wrap justify-start gap-10">
        {items.map((technology) => {
          // Debug logging
          const img = new Image();
          img.onerror = () => console.log(`Failed to load icon for: ${technology.name}`, technology.icon);
          img.src = technology.icon;

          return (
            <div className="w-28 h-32 flex flex-col items-center" key={technology.name}>
              <div className="w-28 h-28">
                <BallCanvas icon={technology.icon} />
              </div>
              <p className="text-[14px] text-taupe text-center mt-2">{technology.name}</p>
            </div>
          );
        })}
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

export default SectionWrapper(Tech, 'tech');
