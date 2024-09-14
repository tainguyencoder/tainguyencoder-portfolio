import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

import gsap from 'gsap';

const Developer = ({ animation, ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/experience/developer.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: bboyAnimation } = useFBX(
    '/models/experience/animations/Bboy Uprock.fbx',
  );
  const { animations: breakdanceFAnimation } = useFBX(
    '/models/experience/animations/Breakdance Freeze Var 2.fbx',
  );
  const { animations: breakdance19Animation } = useFBX(
    '/models/experience/animations/Breakdance 1990.fbx',
  );
  const { animations: flairAnimation } = useFBX(
    '/models/experience/animations/Flair.fbx',
  );

  bboyAnimation[0].name = 'bboy';
  breakdanceFAnimation[0].name = 'breakdancef';
  flairAnimation[0].name = 'flair';
  breakdance19Animation[0].name = 'breakdance19';

  const { actions } = useAnimations(
    [
      bboyAnimation[0],
      breakdanceFAnimation[0],
      flairAnimation[0],
      breakdance19Animation[0],
    ],
    group,
  );

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[animation]) {
      actions[animation].play();
    }
  }, [actions, animation]);

  // useEffect(() => {
  //   actions[animation].reset().fadeIn(0.5).play();
  //   return () => actions[animation].fadeOut(0.5);
  // }, [animation]);

  useEffect(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials['Wolf3D_Outfit_Bottom.002']}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  );
};

useGLTF.preload('/models/experience/developer.glb');
export default Developer;
