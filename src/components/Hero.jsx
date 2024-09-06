import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { StarsCanvas, Loader } from '../components';
import { Sky, Bird, Island } from '../models';

const Hero = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth <= 365) {
      screenScale = [1.8, 1.8, 1.8];
    } else if (window.innerWidth <= 640) {
      screenScale = [2.1, 2.1, 2.1];
    } else if (window.innerWidth <= 768) {
      screenScale = [2.6, 2.6, 2.6];
    } else if (window.innerWidth <= 1024) {
      screenScale = [2.9, 2.9, 2.9];
    } else {
      screenScale = [4.0, 4.0, 4.0];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0.2} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 5, 10]} intensity={0.3} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.5}
          />
          <hemisphereLight
            skyColor="#d0e7ff"
            groundColor="#333333"
            intensity={0.8}
          />
          <Bird />
          <Sky position={[0, 10, 0]} rotation={[0, Math.PI * 2, 0]} />
          <Island rotation={[0.3, 5.1, 0]} scale={islandScale} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
