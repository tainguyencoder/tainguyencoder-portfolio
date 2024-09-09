import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { a, useSpring } from '@react-spring/three'; // Import from react-spring

import CanvasLoader from '../CanvasLoader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);

  // Define spring for smooth scaling
  const { scale } = useSpring({
    scale: hovered ? 3.2 : 2.5,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.15]} />
      <a.mesh
        castShadow
        receiveShadow
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </a.mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <div className="w-[150px] h-[150px]">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: '100%', height: '100%' }} // Ensure Canvas takes full container size
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate autoRotateSpeed={6} enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
