import React from "react";
import styled from "styled-components";
import IMAGES from "../assets/";

function ImageMe() {
  return (
    <ImageFrame>
      <Image src={IMAGES.profile} />
      <ImageBottom>Gone</ImageBottom>
    </ImageFrame>
  );
}

export default ImageMe;

const ImageFrame = styled.div`
  transition: 0.2s linear;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 20px;
  :hover {
    animation: shake 0.5s;
  }
  @keyframes shake {
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
  }
`;
const Image = styled.img`
  width: 170px;
  border: 10px solid white;
  border-radius: 2px;
`;
const ImageBottom = styled.div`
  background-color: white;
  height: 50px;
  margin-top: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;
