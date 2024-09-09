import React from 'react';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

// components
import Developer from '../models/Developer';
import CanvasLoader from '../components/CanvasLoader.jsx';

// styles
import { styles } from '../styles';
// wrapper
import SectionWrapper from '../hoc/SectionWrapper';
// data
import { workExperiences } from '../constants';

import StarsCanvas from '../components/canvas/Stars';

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        {/* title */}
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience
          </h2>
        </motion.div>

        <div className="work-container">
          {/* 3D model */}
          <div className="w-full green-pink-gradient p-[1px]">
            <div className="bg-tertiary xl:h-full lg:h-full md:h-[550px] h-[350px]">
              <Canvas
                camera={{
                  position: [0, 3, 5],
                  fov: 75,
                  near: 0.1,
                  far: 1000,
                }}
              >
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                <Suspense fallback={<CanvasLoader />}>
                  <group position-y={-3.5} scale={3}>
                    <Developer animationName={animationName} />
                  </group>
                </Suspense>
              </Canvas>
              {/* <StarsCanvas /> */}

            </div>
          </div>
          {/* content */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, 'experience');
