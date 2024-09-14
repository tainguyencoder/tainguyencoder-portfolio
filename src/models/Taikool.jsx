import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';

const Taikool = ({ animation, ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('models/contact/taikool.glb');

  const { animations: gangnamAnimation } = useFBX(
    '/models/contact/animations/Gangnam Style.fbx',
  );

  const { animations: typingAnimation } = useFBX(
    '/models/contact/animations/Typing.fbx',
  );

  const { animations: kissAnimation } = useFBX(
    'models/contact/animations/Blow A Kiss.fbx',
  );

  gangnamAnimation[0].name = 'gangnam';
  typingAnimation[0].name = 'typing';
  kissAnimation[0].name = 'kiss';

  const { actions } = useAnimations(
    [gangnamAnimation[0], typingAnimation[0], kissAnimation[0]],
    group,
  );

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[animation]) {
      actions[animation].play();
    }
  }, [actions, animation]);

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
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Facewear.geometry}
        material={materials.Wolf3D_Facewear}
        skeleton={nodes.Wolf3D_Facewear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Headwear.geometry}
        material={materials.Wolf3D_Headwear}
        skeleton={nodes.Wolf3D_Headwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

useGLTF.preload('models/contact/taikool.glb');

export default Taikool;
