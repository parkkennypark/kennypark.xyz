import "../style sheets/home.css";

import head from "../assets/images/Head.png";

import React, { Suspense, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import HeadModel from "./HeadModel";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { NoToneMapping } from "three";

extend({ OrbitControls });

const CameraControls = () => {
   const {
      camera,
      gl: { domElement },
   } = useThree();
   const controls = useRef();
   useFrame((state) => controls.current.update());
   return (
      <orbitControls
         ref={controls}
         args={[camera, domElement]}
         enableZoom={false}
         enablePan={false}
         enableDamping={true}
         dampingFactor={0.1}
         autoRotate={true}
         autoRotateSpeed={2}
         rotateSpeed={0.6}
      />
   );
};

const Head = () => {
   return (
      <Canvas
         id="head"
         legacy="true"
         camera={{ position: [0, 0, -19], fov: 20 }}
         // style={canvasStyle}
         onCreated={({ gl, scene }) => {
            gl.toneMapping = NoToneMapping;
         }}
      >
         <Suspense fallback={head}>
            <CameraControls />
            {/* <OrbitControls enableZoom="false" /> */}
            <HeadModel />
         </Suspense>
      </Canvas>
   );
};

export default Head;
