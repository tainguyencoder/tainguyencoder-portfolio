import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { MeshStandardMaterial, Color } from 'three';

import scene from '../assets/3d/spiderMan.glb';

export function SpiderMan({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature002_85" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['22_body_0.2_20_20']}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials['22_gauntlet_0.3_20_20']}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials['22_gloves_0.2_20_20']}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials['22_head_0.2_20_20']}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials['22_legs_0.2_20_20']}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials['22_legwhite_0.3_20_20']}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials['22_shoes_0.2_20_20']}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials['22_shoewhite_0.3_20_20']}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials['22_spider_0.3_20_20']}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials['24_eye_0.2_0_0']}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials['24_lens_0.2_0_0']}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials['24_webshooter_0.3_0_0']}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials['27_eyeenv_1_0_0']}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials['27_gauntletenv_1_0_0']}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials['27_legenv_1_0_0']}
                    skeleton={nodes.Object_37.skeleton}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials['27_shoeenv_1_0_0']}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials['27_spiderenv_1_0_0']}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name="Object_43"
                    geometry={nodes.Object_43.geometry}
                    material={materials['27_webshooterenvred_1_0_0']}
                    skeleton={nodes.Object_43.skeleton}
                  />
                  <skinnedMesh
                    name="Object_45"
                    geometry={nodes.Object_45.geometry}
                    material={materials['27_webshooterenvsilv_1_0_0']}
                    skeleton={nodes.Object_45.skeleton}
                  />
                  <group name="22_body_0_2_20_20001_65" />
                  <group name="22_gauntlet_0_3_20_20001_66" />
                  <group name="22_gloves_0_2_20_20001_67" />
                  <group name="22_head_0_2_20_20001_68" />
                  <group name="22_legs_0_2_20_20001_69" />
                  <group name="22_legwhite_0_3_20_20001_70" />
                  <group name="22_shoes_0_2_20_20001_71" />
                  <group name="22_shoewhite_0_3_20_20001_72" />
                  <group name="22_spider_0_3_20_20001_73" />
                  <group name="24_eye_0_2_0_0001_74" />
                  <group name="24_eye_0_2_0_0002_75" />
                  <group name="24_lens_0_2_0_0001_76" />
                  <group name="24_webshooter_0_3_0_0001_77" />
                  <group name="27_eyeenv_1_0_0001_78" />
                  <group name="27_gauntletenv_1_0_0001_79" />
                  <group name="27_legenv_1_0_0001_80" />
                  <group name="27_shoeenv_1_0_0001_81" />
                  <group name="27_spiderenv_1_0_0001_82" />
                  <group name="27_webshooterenvred_1_0_0001_83" />
                  <group name="27_webshooterenvsilv_1_0_0001_84" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(scene);

