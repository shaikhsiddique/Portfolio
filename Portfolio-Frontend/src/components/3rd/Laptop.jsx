import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Loader component for displaying loading indicator
function Loader() {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <span>Loading...</span>
    </div>
  );
}

function LaptopModel({ setLoading }) {
  const { scene } = useGLTF('/models/mac.glb', true);
  let tex = useTexture('/images/Frontend.jpg');
  const meshes = {};

  useEffect(() => {
    scene.traverse((object) => {
      meshes[object.name] = object;
    });
    if (meshes.matte) {
      meshes.matte.material.map = tex;
      meshes.matte.material.emissiveIntensity = 0;
      meshes.matte.material.metalness = 1;
      meshes.matte.material.roughness = 1;
    }
    // Mark model as loaded
    setLoading(false);
  }, [scene, tex, meshes, setLoading]);

  return (
    <group position={[-33, -12, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Laptop() {
  const [loading, setLoading] = useState(true); // State to track if model is still loading

  return (
    <>
      {loading && <Loader />} {/* Show Loader while loading */}
      
      <Canvas camera={{ fov: 15, position: [0, 20, 220] }}>
        <Suspense fallback={null}> {/* Suspense with fallback */}
          <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr"]} />
          <OrbitControls
            autoRotate
            enableDamping
            dampingFactor={0.25}
            rotateSpeed={0.5}
            panSpeed={0.8}
            enableZoom={false}
            enablePan
            enableRotate
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 1.5}
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 8}
            minDistance={100}
            maxDistance={500}
          />
          <LaptopModel setLoading={setLoading} />
        </Suspense>
      </Canvas>
    </>
  );
}
