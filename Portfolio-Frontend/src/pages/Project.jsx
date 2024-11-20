import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "../components/MacContainer";

const Project = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ fov: 20, position: [70, -20, 220] }}>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr" />
        <ScrollControls pages={2}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Project;
