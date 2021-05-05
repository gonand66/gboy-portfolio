import React from "react";
import { ContentContainer, ImageMe, MyDetailBox, SectionContainer, TextTitle } from "../components";
import styled from "styled-components";

function AboutMeSection() {
  const renderTextBox = () => {
    return (
      <TextBox>
        <p>
          <p>Hi, My name is Natthapong Songngam. </p>
          <p>
            I graduated last year with a bachelors degree in Telecommunication engineering from
            KMITL.
          </p>
          <p>
            But I have an interest in Web and Mobile development after I learned to coding for my
            graduation project.
          </p>
          <p>
            So after graduated, I develope my skills an learned more thing about developing
            technology by my self.
          </p>
          <p>
            If you want some one who always ready for learned new things, I think I am a right one
            for you.
          </p>
          {/* I have about five month exeperience as Jr.Full-stack developer.
           */}
        </p>
      </TextBox>
    );
  };

  return (
    <SectionContainer>
      <TextTitle>About Me</TextTitle>
      <ContentContainer>
        <ImageMe />
        {renderTextBox()}
        <MyDetailBox />
      </ContentContainer>
    </SectionContainer>
  );
}

export default AboutMeSection;

const TextBox = styled.div`
  background-color: #feffde;
  width: 500px;
  padding: 10px;
  border-radius: 2px;
  min-height: 150px;
  resize: both;
  overflow: auto;
`;
