import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveScene = ({ mousePos, isDark }) => {
  const meshGroupRef = useRef();
  const torusRef = useRef();
  const sphereRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshGroupRef.current) {
      // Smooth mouse parallax interpolation
      const targetX = (mousePos.current.x * Math.PI) / 6;
      const targetY = (mousePos.current.y * Math.PI) / 6;

      meshGroupRef.current.rotation.y += (targetX - meshGroupRef.current.rotation.y) * 0.05;
      meshGroupRef.current.rotation.x += (targetY - meshGroupRef.current.rotation.x) * 0.05;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2;
      torusRef.current.rotation.y += delta * 0.3;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.z += delta * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.1;
      ringRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={meshGroupRef}>
      {/* Ambient & Directional Lights */}
      <ambientLight intensity={isDark ? 0.4 : 1.2} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.5 : 2.5} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1.8} color="#6366f1" />
      <pointLight position={[5, -5, 5]} intensity={1.5} color="#3b82f6" />

      {/* Floating Main Glass Morph Sphere */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2} position={[2.2, 0.4, 0]}>
        <mesh ref={sphereRef} scale={1.8}>
          <icosahedronGeometry args={[1, 64]} />
          <MeshWobbleMaterial
            factor={0.4}
            speed={1.5}
            color={isDark ? '#4338ca' : '#93c5fd'}
            roughness={0.15}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Floating Chrome Torus Knot */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5} position={[-2.4, -0.6, -1]}>
        <mesh ref={torusRef} scale={0.9}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshStandardMaterial
            color={isDark ? '#818cf8' : '#c7d2fe'}
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>
      </Float>

      {/* Floating Outer Orbit Ring */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8} position={[0, -1.8, -2]}>
        <mesh ref={ringRef} scale={1.4}>
          <torusGeometry args={[2.2, 0.04, 32, 100]} />
          <meshStandardMaterial color={isDark ? '#60a5fa' : '#3b82f6'} roughness={0.2} metalness={0.9} />
        </mesh>
      </Float>

      {/* Background Particle Sparkles */}
      <Sparkles
        count={70}
        scale={12}
        size={4}
        speed={0.4}
        opacity={isDark ? 0.6 : 0.4}
        color={isDark ? '#a5b4fc' : '#3b82f6'}
      />
    </group>
  );
};

export const ThreeBackground = ({ isDark = false }) => {
  const mousePos = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    mousePos.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'opacity 0.5s ease'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <InteractiveScene mousePos={mousePos} isDark={isDark} />
      </Canvas>
    </div>
  );
};
