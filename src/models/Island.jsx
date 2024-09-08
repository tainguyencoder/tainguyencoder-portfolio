import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
// 3D file
import isLandScene from '/models/island.glb';

const Island = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(isLandScene);
  const { actions } = useAnimations(animations, group);

  // useEffect to play animations on render
  useEffect(() => {
    // Stop all actions first
    Object.values(actions).forEach((action) => action.stop());

    // Play "Base Stack" animation from the main scene
    if (actions['Base Stack']) {
      actions['Base Stack'].play();
    }
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.625}
        >
          <group
            name="bde2a52c2bcc4654b1515c2b3e89a71bfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="MOUETTE_DEF" scale={1}>
                  <mesh
                    name="0"
                    castShadow
                    receiveShadow
                    geometry={nodes['0'].geometry}
                    material={materials.MOUETTE}
                    morphTargetDictionary={nodes['0'].morphTargetDictionary}
                    morphTargetInfluences={nodes['0'].morphTargetInfluences}
                  />
                  <mesh
                    name="1"
                    castShadow
                    receiveShadow
                    geometry={nodes['1'].geometry}
                    material={materials['MOUETTE.jaune']}
                    morphTargetDictionary={nodes['1'].morphTargetDictionary}
                    morphTargetInfluences={nodes['1'].morphTargetInfluences}
                  />
                  <mesh
                    name="2"
                    castShadow
                    receiveShadow
                    geometry={nodes['2'].geometry}
                    material={materials['MOUETTE.noir']}
                    morphTargetDictionary={nodes['2'].morphTargetDictionary}
                    morphTargetInfluences={nodes['2'].morphTargetInfluences}
                  />
                </group>
                <group name="ROT">
                <group name="ISLE_17">
                    <mesh
                      name="ISLE_17_ile-sable_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_ile-sable_0'].geometry}
                      material={materials['ile-sable']}
                    />
                    <mesh
                      name="ISLE_17_ile-herbe_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_ile-herbe_0'].geometry}
                      material={materials['ile-herbe']}
                    />
                    <mesh
                      name="ISLE_17_ile-roc_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_ile-roc_0'].geometry}
                      material={materials['ile-roc']}
                    />
                    <mesh
                      name="ISLE_17_roc_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.ISLE_17_roc_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      name="ISLE_17_buisson_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.ISLE_17_buisson_0.geometry}
                      material={materials.buisson}
                    />
                    <mesh
                      name="ISLE_17_maison-toit_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_maison-toit_0'].geometry}
                      material={materials['maison-toit']}
                    />
                    <mesh
                      name="ISLE_17_maison-bois_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_maison-bois_0'].geometry}
                      material={materials['maison-bois']}
                    />
                    <mesh
                      name="ISLE_17_maison-light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_maison-light_0'].geometry}
                      material={materials['maison-light']}
                    />
                    <mesh
                      name="ISLE_17_phare-light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_phare-light_0'].geometry}
                      material={materials['phare-light']}
                    />
                    <mesh
                      name="ISLE_17_maison-or_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_maison-or_0'].geometry}
                      material={materials['maison-or']}
                    />
                    <mesh
                      name="ISLE_17_bato-bois_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_bato-bois_0'].geometry}
                      material={materials['bato-bois']}
                    />
                    <mesh
                      name="ISLE_17_bato-voile_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_bato-voile_0'].geometry}
                      material={materials['bato-voile']}
                    />
                    <mesh
                      name="ISLE_17_palmier-tronc_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_palmier-tronc_0'].geometry}
                      material={materials['palmier-tronc']}
                    />
                    <mesh
                      name="ISLE_17_palmier-feuilles_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_palmier-feuilles_0'].geometry}
                      material={materials['palmier-feuilles']}
                    />
                    <mesh
                      name="ISLE_17_ile-o_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_ile-o_0'].geometry}
                      material={materials['ile-o']}
                    />
                    <mesh
                      name="ISLE_17_ile-ecume_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_ile-ecume_0'].geometry}
                      material={materials['ile-ecume']}
                    />
                    <mesh
                      name="ISLE_17_ile-nuage_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_ile-nuage_0'].geometry}
                      material={materials['ile-nuage']}
                    />
                    <mesh
                      name="ISLE_17_LUNE_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.ISLE_17_LUNE_0.geometry}
                      material={materials.LUNE}
                    />
                    <mesh
                      name="ISLE_17_ile-lave_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['ISLE_17_ile-lave_0'].geometry}
                      material={materials['ile-lave']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(isLandScene);

export default Island;

