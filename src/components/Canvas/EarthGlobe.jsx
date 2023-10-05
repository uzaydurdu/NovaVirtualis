import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { useMediaQuery } from '@react-hook/media-query';

const Earth = ({scale}) => {
  return (
    <Sphere args={[1, 64, 64]} scale={scale} receiveShadow castShadow>
      <MeshDistortMaterial
        attach="material"
        color="#AEFE14"
        distort={0.4}
        speed={2}
        factor={0.1}
      />
    </Sphere>
  );
}

const OrbitingBubble = ({ bubbleRef, position, scale, speed }) => {
  const radius = 1.2; // Radius of the Earth
  let angle = (Math.PI * 2 * Math.random()); // Random initial angle

  useFrame(() => {
    angle += 0.005 * speed; // Adjust the speed as needed
    const x = Math.cos(angle) * radius; // Calculate X position
    const z = Math.sin(angle) * radius; // Calculate Z position
    bubbleRef.current.position.x = x + position[0];
    bubbleRef.current.position.z = z + position[2];
  });

  return (
    <Sphere ref={bubbleRef} args={[scale, 16, 16]} position={position}>
      
      <MeshDistortMaterial
        attach="material"
        color="#AEFE14"
        distort={1.0}
        speed={2}
        factor={0.8}
      />
    </Sphere>
  );
}

const EarthGlobe = () => {
  const bubbleRefs = useRef([]);

  const isSmallScreen = useMediaQuery('(max-width: 1024px)');


    if (bubbleRefs.current.length === 0) {
      for (let i = 0; i < 15; i++) {
        const position = [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1];
        const scale = Math.random() * 0.07;
        const speed = 0.005;
        bubbleRefs.current.push({ position, scale, speed });
      }
    }


  useEffect(() => {
    // Cleanup function to clear bubbleRefs when the component is unmounted
    return () => {
      bubbleRefs.current = [];
    };
  }, []);

  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }} shadowMap>
      <OrbitControls enableZoom={false} autoRotate/>
      <ambientLight intensity={1} />
      <directionalLight intensity={1.5} position={[3, 2, 1]} color="#AEFE14" castShadow />
      <Earth scale={isSmallScreen ? 0.5: 1.0} />
      {bubbleRefs.current.map((bubbleData, index) => (
        <OrbitingBubble
          key={index}
          bubbleRef={bubbleRefs.current[index]}
          position={bubbleData.position}
          scale={bubbleData.scale}
          scale={isSmallScreen ? bubbleData.scale/2: bubbleData.scale}
          speed={bubbleData.speed}
        />
      ))}
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={200} opacity={2} radius={30} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}

export default EarthGlobe;
