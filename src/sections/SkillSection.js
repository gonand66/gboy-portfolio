import React, { useState } from "react";
import styled, { css } from "styled-components";
import IMAGES from "../assets";
import { ContentContainer, SectionContainer, TextTitle } from "../components";

function SkillSection() {
  const [open, setOpen] = useState(false);

  const renderIcon = (icon, text) => {
    const iconStyle = { color: "#1DB32E", fontSize: 60 };
    const textStyle = { color: "#1A5D44", fontSize: 20 };
    return (
      <IconContainer>
        <i className={icon} style={iconStyle}></i>
        <br />
        <p style={textStyle}>{text}</p>
      </IconContainer>
    );
  };
  const renderImage = (src, text) => {
    const imgStyle = { height: 60 };
    const textStyle = { color: "#1A5D44", fontSize: 20 };
    return (
      <IconContainer>
        <img src={src} style={imgStyle} alt="ts" />
        <br />
        <p style={textStyle}>{text}</p>
      </IconContainer>
    );
  };

  return (
    <SectionContainer bgColor={"white"}>
      <TextTitle color={"#1A5D44"}>Skills</TextTitle>
      <ContentContainer>
        {renderIcon("fab fa-js", "JavaScript")}
        {renderImage(IMAGES.typescripts, "Typescript")}
        {renderIcon("fab fa-html5", "Html5")}
        {renderIcon("fab fa-css3-alt", "Css3")}
        {renderIcon("fab fa-react", "React js")}
        {renderIcon("fab fa-react", "React Native")}
      </ContentContainer>

      <FlexBox>
        <Box onClick={() => setOpen(true)} isBig={open}>
          <H3>More</H3>
          <FlexBox>
            <Item>Node js</Item>
            <Item>Styled Coponents</Item>
            <Item>Scss</Item>
            <Item>Git</Item>
            <Item>Express.js</Item>
            <Item>Mongo db</Item>
            <Item>Mobx state tree</Item>
            <Item>Postman</Item>
          </FlexBox>
        </Box>
      </FlexBox>
    </SectionContainer>
  );
}

export default SkillSection;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline: 40px;
  margin-block: 30px;
  width: 120px;
`;

const Box = styled.div`
  background-color: #ddffbc;
  padding: 10px;
  width: 70px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: width 0.7s, height 0.7s 0.7s;
  border-radius: 5px;
  ${(props) =>
    props.isBig &&
    css`
      width: 270px;
      height: 250px;
    `};
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Item = styled.div`
  margin: 5px;
  background-color: white;
  padding: 7px;
  border-radius: 20px;
`;
const H3 = styled.h3`
  color: green;
  margin-bottom: 10px;
`;
