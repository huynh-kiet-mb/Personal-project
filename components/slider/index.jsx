import React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Slider = ({ config }) => {
  const delay = 3500;
  const [imageIndex, setImageIndex] = useState(0);
  // useEffect
  useEffect(() => {
    setTimeout(
      () =>
      setImageIndex((prevIndex) =>
          prevIndex === config.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [imageIndex]);

  // Functions
  const next = () => {
    setImageIndex((state) => (state += 1));

    if (imageIndex === config.length - 1) setImageIndex(0);
  };

  const prev = () => {
    setImageIndex((state) => (state -= 1));
    if (imageIndex === 0) setImageIndex(config.length - 1);
  };

  const getImg = (index) => {
    setImageIndex(index);
  };
  console.log(imageIndex);
  return (
    <Container imageIndex>
      <ImageContainer src={config[imageIndex].image} />
      <TitleImage>{config[imageIndex].title}</TitleImage>
      {/* <NavButton right onClick={next}>
        <ArrowCircleRightIcon />
      </NavButton>
      <NavButton onClick={prev}>
        <ArrowCircleLeftIcon />
      </NavButton> */}
      <DotContainer>
        {config.map((dot, index) => (
          <Dot
            key={dot.image}
            active={index === imageIndex}
            onClick={() => getImg(index)}
          />
        ))}
      </DotContainer>
    </Container>
  );
};

export default Slider;

// Styled here

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  color: white;
  box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0.9),
    inset 0 --3em 3em rgba(3, 3, 3, 0.5);
  transform: translate(0, -50%);
  ${(props) =>
    props.right == true
      ? css`
          right: 2%;
        `
      : css`
          left: 2%;
        `};
`;

const TitleImage = styled.h3`
  font-size: 25px;
  color: #000000;
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0);
  box-shadow: 0px 4px 10px 15px rgba(3, 3, 3, 0.9);
  inset: 0 --3em 3em rgba(3, 3, 3, 0.5);
`;

const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, 0);
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.active === true
      ? css`
          background-color: grey;
        `
      : css`
          background-color: white;
        `}
`;
