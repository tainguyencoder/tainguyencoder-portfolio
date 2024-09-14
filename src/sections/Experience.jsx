import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';

// styles
import { styles } from '../styles';
// wrapper
import SectionWrapper from '../hoc/SectionWrapper';
// components
import Developer from '../models/Developer';
import CanvasLoader from '../components/CanvasLoader.jsx';
// data
import { experiences } from '../constants';

const Experience = () => {
  const [animationName, setAnimationName] = useState('bboy');
  const popupRef = useRef();

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className="w-full text-white-600">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Career Milestones
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="work-container">
        {/* 3D model */}
        <div
          ref={sectionRef}
          className="w-full green-pink-gradient p-[1px] rounded-2xl"
        >
          <div className="bg-tertiary rounded-2xl xl:h-full lg:h-full md:h-[550px] h-[350px]">
            {inView && (
              <Canvas
                camera={{
                  position: [3.5, 3, 8],
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
                  <group position-y={-3.5} scale={3.8}>
                    <Developer animationName={animationName} />
                  </group>
                </Suspense>
              </Canvas>
            )}
          </div>
        </div>

        {/* content */}
        <div className="work-content">
          {experiences.map((item) => (
            <div
              key={item.id}
              onPointerOver={() =>
                setAnimationName(item.animation.toLowerCase())
              }
              onPointerOut={() => setAnimationName('bboy')}
              className="work-content_container group"
            >
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo">
                  <img className="w-12 h-12" src={item.icon} alt="" />
                </div>

                <div className="work-content_bar" />
              </div>

              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-white-800">{item.name}</p>
                <p className="text-sm mb-5">
                  {item.pos} -- <span>{item.duration}</span>
                </p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {item.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="group-hover:text-white transition-all ease-in-out duration-500"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
