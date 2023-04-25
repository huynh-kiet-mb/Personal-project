import Head from "next/head";
import Header from "../header/index";
import MainLayout from "../main/index";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Room } from "../room/index";

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      {/* <Header />
            <MainLayout children={children} /> */}
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [-40, 30, -40] }}>
        <Room />
        <axesHelper args={[100]} />
      </Canvas>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(0deg, #000000, #502786 100%);
`;
