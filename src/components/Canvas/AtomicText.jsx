import { React, useRef, useState } from 'react';
import { Canvas,  useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMediaQuery } from '@react-hook/media-query';
import * as THREE from 'three';

const NovaText = () => {
    const gltf = useLoader(GLTFLoader, '../../../public/keyboard/3dtext.gltf');
    //const { scene, animations } = useGLTF('../../../public/keyboard/3dtext.gltf');
    const scene = gltf.scene;
    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(scene);

    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });
    
      useFrame((state, delta) => {
        mixer.update(delta);
      });

      return (
        <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight intensity={4} position={[0, 1, 1]} color="#27AA80"/>
          <primitive object={scene} scale={isSmallScreen ? 0.08 : 0.15} />
          
         
        </mesh>
      );
    };

const AtomicText = () => {
  return (
    <Canvas frameLoop="demand" camera={{ fov: 35, position: [2, 0, 5] }} gl={{ preserveDrawingBuffer: true }} style={{ width: '100%', height: '100vh' }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight intensity={4.5} position={[1, 0, 1]} color="#AEFE14" />
        <NovaText />
      </Canvas>
  )
}

export default AtomicText