/* eslint-disable react/no-unknown-property */
import { a } from '@react-spring/three';
import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

import islandScene from '../assets/3d/island.glb';

export function Island({ ...props }) {
  const island = useGLTF(islandScene);

  const islandRef = useRef();

  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <mesh ref={islandRef} {...props}>
      <primitive object={island.scene} />
    </mesh>
  );
}
