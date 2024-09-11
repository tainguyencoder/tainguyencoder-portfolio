import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

// wrapper
import SectionWrapper from '../hoc/SectionWrapper';
// styles
import { styles } from '../styles';
// motion
import { fadeIn, textVariant } from '../utils/motion';
// components
import BallCanvas from '../components/canvas/Ball'
// data
import { services, technologies } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.05}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.4, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-80 h-30 object-contain"
        />

        <p className="text-white text-[20px] font-bold text-center">
          {title}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" />
          <div className="w-1 sm:h-80 h-40 rainbow-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <br/>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Tai Nguyen
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Front-end developer <br />
            Welcome to My Portfolio
          </p>
        </div>
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.icon} index={index} {...service} />
        ))}
      </div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-2">
      {technologies.map((technology) => (
        <div className='w-18 h-18' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
