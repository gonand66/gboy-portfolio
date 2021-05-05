import React from "react";
import styled from "styled-components";

function HeroSection() {
  return (
    <Container>
      <MaskContainer />
      <a href={"https://github.com/gonand66/gboy-portfolio"} target="_blank" rel="noreferrer">
        <i class="fas fa-laptop-code" style={iconStyle}></i>
      </a>
      <Title first>Hi, I'm Natthapong</Title>
      <Title>A web developer</Title>
    </Container>
  );
}

export default HeroSection;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #52734d;
  overflow: hidden;
`;
const Title = styled.p`
  color: #feffde;
  font-size: 35px;
  text-align: center;
  white-space: nowrap;
  width: 0;
  animation: ${(props) =>
    props.first ? "title 4s 1.7s linear forwards" : "title 4s 2.8s linear forwards"};
  overflow: hidden;
  /* @media only screen and (max-width: 500px) {
    animation: ${(props) =>
      props.first ? "title 1.5s 1.5s linear forwards" : "title 1.5s 3s linear forwards"};
  } */
  @keyframes title {
    to {
      width: 100%;
    }
  }
  @keyframes title2 {
    to {
      width: 100%;
    }
  }
`;
const MaskContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #feffde;
  position: absolute;
  z-index: 2;
  animation: maskOff 1s 0.5s linear forwards;
  @keyframes maskOff {
    to {
      transform: translateY(-100%);
    }
  }
`;
const iconStyle = { fontSize: 100, color: " #feffde", margin: 30 };
