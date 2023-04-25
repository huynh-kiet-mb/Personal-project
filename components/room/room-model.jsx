/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 components/model/oriental_cyberpunk_room.glb
Author: isipeassy (https://sketchfab.com/Isi-peassy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/oriental-cyberpunk-room-2a42d577f03a43469d2e897a99920e67
Title: oriental cyberpunk room
*/

import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOOR = 3;


export function RoomModel(props) {
  const { nodes, materials } = useGLTF('./model/oriental_cyberpunk_room.glb')
  
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

    useFrame(()=> {
        tl.current.seek(scroll.offset * tl.current.duration());
    });

  useLayoutEffect(()=> {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
        ref.current.position,
        {
            duration: 2,
            z: -FLOOR_HEIGHT * (NB_FLOOR - 1),
        },
        0
    );
  },[]);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blinn2SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.blinn3SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.blinn4SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.blinn5SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.lambert10SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert17SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.lambert15SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.lambert20SG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.lambert16SG} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.lambert23SG} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.lambert3SG} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.lambert8SG} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.lambert22SG} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.lambert26SG} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.lambert28SG} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.blinn4SG} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.blinn5SG} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.lambert11SG} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.lambert12SG} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.lambert19SG} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.lambert21SG} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.lambert14SG} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.lambert13SG} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.lambert13SG} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.lambert18SG} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.lambert24SG} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.lambert3SG} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.lambert4SG} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.lambert9SG} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.lambert25SG} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.lambert27SG} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.lambert2SG} />
      </group>
    </group>
  )
}

useGLTF.preload('./model/oriental_cyberpunk_room.glb')