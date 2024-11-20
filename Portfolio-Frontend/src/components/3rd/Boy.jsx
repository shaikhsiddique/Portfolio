import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function BoyModel({ setLoading }) {
  const { scene } = useGLTF('/models/man.glb', true);
  const [meshes, setMeshes] = useState({});

  useEffect(() => {
    const tempMeshes = {};
    scene.traverse((object) => {
      if (object.isMesh) tempMeshes[object.name] = object;
    });

    setMeshes(tempMeshes);

    // Update material properties for specific mesh (example: 'matte')
    if (tempMeshes.matte) {
      tempMeshes.matte.material.emissiveIntensity = 0;
      tempMeshes.matte.material.metalness = 1;
      tempMeshes.matte.material.roughness = 1;
    }

    // Mark model as loaded
    setLoading(false);
  }, [scene, setLoading]);

  return (
    <group 
      position={[30, -9, 0]} 
      scale={[12, 12, 12]} 
      rotation={[0, -Math.PI / 3.5, 0]} 
    >
      <primitive object={scene} />
    </group>
  );
}

export default function Boy() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <div className="loading-indicator">Loading...</div>}
      <Canvas camera={{ fov: 30, position: [0, 10, 80] }}>
        <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr"
        />
        <OrbitControls
          autoRotate
          enableDamping
          dampingFactor={0.25}
          rotateSpeed={0.5}
          panSpeed={0.8}
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={-Math.PI / 10}
          maxAzimuthAngle={Math.PI / 10}
          minDistance={50}
          maxDistance={200}
        />
        <BoyModel setLoading={setLoading} />
      </Canvas>
    </>
  );
}
