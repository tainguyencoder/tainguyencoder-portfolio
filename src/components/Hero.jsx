import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { Loader } from '../components';
import { HeroLand } from '../models';

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
        frameloop="always"
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
          <HeroLand/>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
