import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function ServerModel({ setLoading }) {
  const { scene } = useGLTF('/models/server.glb', true);

  useEffect(() => {
    const meshes = {};
    scene.traverse((object) => {
      meshes[object.name] = object;
    });

    // Once model is loaded, mark it as loaded
    setLoading(false);
  }, [scene, setLoading]);

  return (
    <group position={[-13, -4, 0]} scale={[1.8, 1.8, 1.8]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Server() {
  const [loading, setLoading] = useState(true); // Initialize loading state

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading && <div>Loading 3D Model...</div>} {/* Show loading text */}
      
      <React.Suspense fallback={<div>Loading...</div>}>
        <Canvas camera={{ fov: 15, position: [0, 20, 100] }}>
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr" />
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
            minDistance={50}
            maxDistance={300}
          />
          <ServerModel setLoading={setLoading} />
        </Canvas>
      </React.Suspense>
    </div>
  );
}
