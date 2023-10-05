import { React, useRef, useState, useEffect } from 'react';
import { Canvas,  useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMediaQuery } from '@react-hook/media-query';
import * as THREE from 'three';

const NovaText = () => {
  const _url = 'https://raw.githubusercontent.com/uzaydurdu/NovaVirtualis/main/public/keyboard/3dtext.gltf';
    const gltf = useLoader(GLTFLoader, _url);
    //const { scene, animations } = useGLTF('../../../public/keyboard/3dtext.gltf');
    const scene = gltf.scene;
    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(scene);

    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });
    
      useFrame((state, delta) => {
        mixer.update(delta);
      });

      const [scaleFactor, setScaleFactor] = useState(1);

      const isNormalScreen = useMediaQuery('(max-width: 1440px)');
      const isSmallScreen = useMediaQuery('(max-width: 768px)');
    
      useEffect(() => {
        function handleResize() {
          const newScaleFactor = calculateScaleFactor();
          setScaleFactor(newScaleFactor);
        }
    
        function calculateScaleFactor() {
          if (isSmallScreen) {
            // Define your scaling factor for small screens
            return 0.08; // Adjust this factor as needed
          } else if (isNormalScreen) {
            // Define your scaling factor for normal screens
            return 0.09; // Adjust this factor as needed
          } else {
            // Set a specific scaling factor for wide screens (1440px and wider)
            return 0.1; // Adjust this factor as needed
          }
        }
    
        handleResize(); // Call it initially
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isSmallScreen, isNormalScreen]);

      return (
        <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight intensity={4} position={[0, 1, 1]} color="#27AA80"/>
          <primitive object={scene} scale={scaleFactor * 1.1} />
          
         
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