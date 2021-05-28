import "../style sheets/home.css";

import head from "../assets/images/Head.png";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeadModel from "./HeadModel";
import { OrbitControls } from "@react-three/drei";

import { NoToneMapping } from "three";

const Head = () => {
  return (
    <Canvas
      id="head"
      colorManagement
      camera={{ position: [0, 0, -20], fov: 20 }}
      // style={canvasStyle}
      onCreated={({ gl, scene }) => {
        gl.toneMapping = NoToneMapping;
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <HeadModel />
      </Suspense>
    </Canvas>
  );
};

export default Head;
