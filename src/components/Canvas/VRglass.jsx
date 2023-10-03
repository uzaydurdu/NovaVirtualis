import { React, useRef, useState } from 'react';
import { Canvas,  useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { useMediaQuery } from '@react-hook/media-query';
import * as THREE from 'three';
import '../../styles/vrglass.css';


const Electron = ({ radius, speed, position }) => {
  const electron = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    let x, z;
    
    if (position[2] === undefined) {
      // Horizontal orbit
      x = position[0] + radius * Math.cos(speed * time);
      z = position[1] + radius * Math.sin(speed * time);
    } else {
      // Vertical or random orbit
      x = position[0] + radius * Math.cos(speed * time);
      z = position[2] + radius * Math.sin(speed * time);
    }

    electron.current.position.set(x, 0, z);
  });

  return (
    <mesh ref={electron}>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshBasicMaterial color="#AEFE14" />
      
    </mesh>
  );
};

const VrGlass = () => {
  //const vrGlass = useGLTF('/keyboard/kb.gltf');
  const { scene, animations } = useGLTF('/keyboard/kb.gltf');
  const mixer = new THREE.AnimationMixer(scene);
  
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const [numHorizontalElectrons, setNumHorizontalElectrons] = useState(4); // Adjust the number of horizontal electrons
  const [numVerticalElectrons, setNumVerticalElectrons] = useState(8); // Adjust the number of vertical electrons
  const [closeness, setCloseness] = useState(0.5); // Adjust the closeness value

  const horizontalElectronPositions = [];
  const horizontalElectronSpeeds = [];
  const verticalElectronPositions = [];
  const verticalElectronSpeeds = [];

  for (let i = 0; i < numHorizontalElectrons; i++) {
    const radius = (1.5 + Math.random() * 0.5) * closeness;
    const speed = (0.2 + Math.random() * 0.4) * (Math.random() < 5 ? 10 : 8);
    const position = [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1];

    horizontalElectronPositions.push(position);
    horizontalElectronSpeeds.push(speed);
  }

  for (let i = 0; i < numVerticalElectrons; i++) {
    const radius = (1.5 + Math.random() * 0.5) * closeness;
    const speed = (0.2 + Math.random() * 0.4) * (Math.random() < 5 ? 10 : 8);
    const position = [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1];

    verticalElectronPositions.push(position);
    verticalElectronSpeeds.push(speed);
  }

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
      <primitive object={scene} scale={isSmallScreen ? 0.6 : 0.8} />
      
     
    </mesh>
  );
};


const VRglass = () => {

  const [openLink, setOpenLink] = useState(false);

  return (
    <div className="vrglass__canvas-container">
      <Canvas frameLoop="demand" camera={{ fov: 25, position: [7, 2, 5] }} gl={{ preserveDrawingBuffer: true }} style={{ width: '100%', height: '100vh' }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight intensity={2.5} position={[1, 0, 1]} color="#AEFE14" />
        <VrGlass />
      </Canvas>
    </div>
  );
};

export default VRglass;
