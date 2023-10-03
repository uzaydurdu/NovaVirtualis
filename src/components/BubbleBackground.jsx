import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BubbleBackground = () => {
  const containerRef = useRef(null); // Ref to the container element
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const particles = [];

  useEffect(() => {
    // Set the dimensions of the renderer based on the container
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement); // Append the renderer's DOM element

    camera.position.z = 5;

    const createParticle = () => {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.01, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      particle.position.x = (Math.random() - 0.5) * 10;
      particle.position.y = (Math.random() - 0.5) * 10;
      particle.position.z = (Math.random() - 0.5) * 10;
      particles.push(particle);
      scene.add(particle);
    };

    // Create particles
    for (let i = 0; i < 100; i++) {
      createParticle();
    }

    const animate = () => {
      particles.forEach((particle) => {
        particle.position.y -= 0.01; // Move particles upward
        if (particle.position.y < -2) {
          particle.position.y = 2; // Reset particle position if it goes out of view
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', z: -1 }}></div>
  );
};

export default BubbleBackground;
