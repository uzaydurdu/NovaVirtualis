import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Avatar } from './Avatar';
import { GLTFLoader } from 'three-stdlib';
import { useMediaQuery } from '@react-hook/media-query';

const AvatarLoader = () => {
  const [model, setModel] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  // Load the 3D model
  const loadModel = () => {
    const loader = new GLTFLoader();
    loader.load('public/avatar_model/avatar.glb', (gltf) => {
      const gltfModel = gltf.scene;
      gltfModel.traverse(function (obj) {
        obj.frustumCulled = false;
      });
      setModel(gltfModel);
    });
  };

  // Load the model when the component mounts
  React.useEffect(() => {
    loadModel();
  }, []);

  return (
    <Canvas
    shadows camera={{ position: [0, 2, 5], fov: 30 }}
    >
      <OrbitControls enableZoom={false} />
      <group position-y={-1}>
        {model ? <primitive scale={isSmallScreen ? 0.8 : 1.0} object={model} dispose={null} /> : null}
      </group>
      <directionalLight intensity={1.5} position={[3, 2, 1]} color="#AEFE14" />
      <ambientLight intensity={1} />

    </Canvas>
  );
};

export default AvatarLoader;
