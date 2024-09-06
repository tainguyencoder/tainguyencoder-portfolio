import React from "react";
import Tilt from "react-parallax-tilt"; // Replaced react-tilt with react-parallax-tilt
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { schools } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SchoolCard = ({
  index,
  name,
  major,
  time,
  tags,
  image,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}  // Same functionality as before
        tiltMaxAngleY={45}
        scale={1.05}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {major} <br />
            {time}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Schools</p>
        <h2 className={`${styles.sectionHeadText}`}>Education</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Let's take a look
        </motion.p>
      </div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-7'>
        {schools.map((project, index) => (
          <SchoolCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");
