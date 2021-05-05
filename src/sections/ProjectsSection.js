import React from "react";
import styled from "styled-components";
import IMAGES from "../assets";
import { ContentContainer, ImageFrame, SectionContainer, TextTitle } from "../components";

function ProjectsSection() {
  return (
    <SectionContainer>
      <TextTitle>Projects</TextTitle>
      <ContentContainer>
        <ImageFrame src={IMAGES.g_music1} />
        <Box>
          <h3>Project : G-music</h3>
          <br />
          <p>Music-Album E-commerce</p>
          <br />
          <p>React js, Mobx-state-tree,Express.js</p>
          <p>Styled-components, Mongo db</p>
          <br />
          <p>I Made this for practice and learn about styled components</p>
          <a href={"https://g-music2021.web.app/"} target="_blank" rel="noreferrer">
            <br />
            <i className="fas fa-external-link-alt" style={iconStyle}></i>
          </a>
          <a href={"https://github.com/gonand66/g-music2021"} target="_blank" rel="noreferrer">
            <i className="fab fa-github" style={iconStyle}></i>
          </a>
        </Box>
      </ContentContainer>
      <FreeSpace/>
    </SectionContainer>
  );
}

export default ProjectsSection;

const Box = styled.div`
  background-color: #feffde;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
`;
const FreeSpace = styled.div`
  height: 15vh;
`;
const iconStyle = { color: "#1A5D44", fontSize: 30, margin: 10, cursor: "pointer" };
