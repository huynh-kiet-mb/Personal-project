import { OrbitControls, ScrollControls } from "@react-three/drei";
import { RoomModel2 } from "./room-model2";
import React, { useLayoutEffect, useRef } from "react";

export const Room = () => {
 

    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={true} />
            {/* <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh> */}
            <ScrollControls pages={3} damping={0.25}>
                <RoomModel2 />
            </ScrollControls>
        </>
    );
}