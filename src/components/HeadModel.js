/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { WebGLRenderer, useFrame } from "@react-three/fiber";

export default function Model(props) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/head.glb");

  const getTransform = {
    rotation: [0, Date.now(), 0],
  };

  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.005));

  return (
    <group ref={mesh} {...props} dispose={null}>
      <mesh
        geometry={nodes.Head.geometry}
        material={materials.HEAD}
        scale={[1, 1, 1]}
        rotation={[0.25, 3.1415, 0]}
        // rotation={getTransform.rotation}
      />
    </group>
  );
}

useGLTF.preload("/head.glb");
