import React from "react";
import styled from "styled-components";

function HeroSection() {
  return (
    <Container>
      <MaskContainer />
      <a href={"https://github.com/gonand66/gboy-portfolio"} target="_blank" rel="noreferrer">
        <i class="fas fa-laptop-code" style={iconStyle}></i>
      </a>
      <TitleBox>
        <Title first>Hi, I'm Natthapong</Title>
        <Title>A web/mobile developer</Title>
      </TitleBox>
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
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  color: #feffde;
  font-size: 35px;
  text-align: center;
  white-space: nowrap;
  width: 0;
  animation: ${(props) =>
    props.first ? "title 1s 1.5s linear forwards" : "title 1.7s 2.5s linear forwards"};
  overflow: hidden;
  @keyframes title {
    to {
      width: 100%;
    }
  }
  @media only screen and (max-width: 400px) {
    font-size: 25px;
  }
`;
const MaskContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #feffde;
  position: absolute;
  z-index: 2;
  animation: maskOff 0.7s 0.5s linear forwards;
  @keyframes maskOff {
    to {
      transform: translateY(-100%);
    }
  }
`;
const iconStyle = { fontSize: 100, color: " #feffde", margin: 30 };
