import { React, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RenderTexture, PerspectiveCamera, Text, Preload, MeshDistortMaterial, Sphere, Decal, Float, useGLTF } from '@react-three/drei';




const Ball = (props) => {

  const textRef = useRef();
  useFrame(state => (textRef.current.position.x = Math.tan(state.clock.elapsedTime) * 2))


  return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
          <ambientLight intensity={0.25}/>
          <directionalLight position={[0, 0, 0.05]}/>
          <mesh casyShadow receiveShadow scale={0.75}>
              <icosahedronGeometry args={[1, 1]}/>
              <meshStandardMaterial polygonOffset
                polygonOffsetFactor={-5}
                flatShading >
              <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <color attach="background" args={["#AEFE14"]} />
              <Text ref={textRef} fontSize={0.85} color="#1C2832">
                  NovaVirtualis
                </Text>
              </RenderTexture>
            </meshStandardMaterial>
              <Decal
              position={[0, 0, 1]}
              rotation={[ 2 * Math.PI, 0, 6.25]}
              />
          </mesh>
      </Float>
  )
}

const SocialMediaCube = () => {
  const textRef = useRef();
  useFrame(state => (textRef.current.position.x = Math.tan(state.clock.elapsedTime) * 2))
  

  return (
    <mesh>
      <hemisphereLight intensity={0.15} />
      <boxGeometry args={[2, 2, 1]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#AEFE14"]} />
          <Text ref={textRef} fontSize={0.85} color="#1C2832">
            NovaVirtualis
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

const Cube = () => {
  return (
    <div className="socialmediacube__container">
      <Canvas frameLoop="demand"
        shadows
        camera={{ fov: 35, position: [5, 5, 5] }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: '100vh', height: '100vh' }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight intensity={1.5} position={[3, 2, 1]} color="#AEFE14" />

        <SocialMediaCube />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default Cube