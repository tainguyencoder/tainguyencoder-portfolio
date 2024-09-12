import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { textVariant } from '../utils/motion';

// styles
import { styles } from '../styles';
// wrapper
import SectionWrapper from '../hoc/SectionWrapper';
// components
import Developer from '../models/Developer';
import CanvasLoader from '../components/CanvasLoader.jsx';
// data
import { workExperiences } from '../constants';

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [items, setItems] = useState(workExperiences);
  const [selectedId, setSelectedId] = useState(null);
  const popupRef = useRef();

  const handleClosePopup = () => setSelectedId(null);

  useEffect(() => {
    const handleScroll = () => {
      setAnimationName('idle');
      setSelectedId(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setAnimationName('idle');
        handleClosePopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5, borderRadius: '50%' },
    visible: { opacity: 1, scale: 1, borderRadius: '10px' },
    exit: { opacity: 0, scale: 0.5, borderRadius: '50%' },
  };

  return (
    <div className="w-full text-white-600">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="work-container">
        <div className="w-full green-pink-gradient p-[1px] rounded-2xl">
          <div className="bg-tertiary rounded-2xl xl:h-full lg:h-full md:h-[550px] h-[350px]">
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
                <group position-y={-4} scale={3.3}>
                  <Developer animationName={animationName} />
                </group>
              </Suspense>
            </Canvas>
          </div>
        </div>
        {/* content */}
        <div className="work-content">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <div
                onClick={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOver={() =>
                  setAnimationName(item.animation.toLowerCase())
                }
                onPointerOut={() => setAnimationName('idle')}
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
                  <p className="group-hover:text-white transition-all ease-in-out duration-500">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center mx-10 z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={popupVariants}
              transition={{
                type: 'tween',
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              <div ref={popupRef} className="popup-content group">
                <div className="flex flex-col justify-start items-center py-2">
                  <div className="popup-content_logo">
                    <img
                      className="w-12 h-12"
                      src={items.find((item) => item.id === selectedId).icon}
                      alt=""
                    />
                  </div>
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-100">
                    {items.find((item) => item.id === selectedId).name}
                  </p>
                  <p className="text-md mb-5">
                    <span>
                      {items.find((item) => item.id === selectedId).duration}
                    </span>
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    {items
                      .find((item) => item.id === selectedId)
                      .points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-cyan-400 text-[11px] xs:text-[16px] sm:text-[16px] sm:font-medium pl-1 tracking-wider"
                        >
                          {point}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
