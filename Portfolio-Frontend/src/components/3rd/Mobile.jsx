import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function MobileModel({ setLoading }) {
  const { scene } = useGLTF('/models/Mobile.glb', true);

  useEffect(() => {
    const meshes = {};
    scene.traverse((object) => {
      meshes[object.name] = object;
    });

    // Set loading to false once the model is loaded
    setLoading(false);
  }, [scene, setLoading]);

  return (
    <group position={[-3, 0, 0]} scale={[1.8, 1.8, 1.8]} rotation={[0, -300, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function MobileContainer() {
  const [loading, setLoading] = useState(true); // Initialize loading state
console.log(loading);
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'flex-end' }}>
      {loading && <div>Loading...</div>} {/* Show loading text */}
      <React.Suspense fallback={<div>Loading 3D Model...</div>}>
        <Canvas camera={{ fov: 45, position: [0, 0, 10] }}>
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls
            autoRotate
            enableDamping
            dampingFactor={0.25}
            rotateSpeed={0.5}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 8}
          />
          <MobileModel setLoading={setLoading} />
        </Canvas>
      </React.Suspense>
    </div>
  );
}
