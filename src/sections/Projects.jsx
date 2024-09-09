import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

// styles
import { styles } from '../styles';
// wrapper
import SectionWrapper from '../hoc/SectionWrapper';
// data
import { projects } from '../constants/index.js';
// components
import CanvasLoader from '../components/CanvasLoader.jsx';
import Computer from '../models/Computer';

const projectCount = projects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' },
    );
  }, [selectedProjectIndex]);
  const currentProject = projects[selectedProjectIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="grid xl:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full rounded-2xl">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl bg-tertiary shadow-black-200 rounded-2xl">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                Check Live Site
              </span>
              <img
                src="/assets/projects/arrow-up.png"
                alt="arrow"
                className="w-4 h-4"
              />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation('previous')}
            >
              <img
                src="/assets/projects/left-arrow.png"
                alt="left arrow"
                className="w-5 h-5"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation('next')}
            >
              <img
                src="/assets/projects/right-arrow.png"
                alt="right arrow"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
        <div className="w-full green-pink-gradient p-[1px] rounded-tr-2xl rounded-tl-2xl">
          <div className="bg-tertiary xl:h-full lg:h-[650px] md:h-[550px] h-[350px] rounded-tr-2xl rounded-tl-2xl">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={2}
                    position={[-0.2, -3, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <Computer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'project');
