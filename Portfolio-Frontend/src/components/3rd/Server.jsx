import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function ServerModel() {
  const { scene } = useGLTF('/models/server.glb', true);
  const meshes = {};

  useEffect(() => {
    scene.traverse((object) => {
      meshes[object.name] = object;
    });
  }, [scene]);

  return (
    <group position={[-13, -4, 0]} scale={[1.8, 1.8, 1.8]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Server() {
  return (
    <React.Suspense fallback={null}>
      <Canvas camera={{ fov: 15, position: [0, 20, 100] }}>
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
          minDistance={50}
          maxDistance={300}
        />
        <ServerModel />
      </Canvas>
    </React.Suspense>
  );
}
