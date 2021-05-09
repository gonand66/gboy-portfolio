import React from "react";
import styled from "styled-components";
import IMAGES from "../assets";
import { ContentContainer, ImageFrame, SectionContainer, TextTitle, Timeline } from "../components";

function WorkExpSection() {
  return (
    <SectionContainer bgColor={"#ddffbc"}>
      <TextTitle color={"#1A5D44"}>Work experiences</TextTitle>
      <ContentContainer>
        <Timeline />
        <Box>
          <p>Company : Sitron co., ltd</p>
          <br />
          <p>Positon : Jr. Full-stack Developer</p>
          <br />
          <p>Duration : Oct 2020 - March 2021 </p>
          <br />
          <p>Resposibility: </p>
          <li>Create user interface from design</li>
          <li>Develope application feature from customer requirement</li>
          <li>Integrating API to frontend</li>
        </Box>
      </ContentContainer>
      <ContentContainer>
        <Image src={IMAGES.amway_poster} />
        <Box>
          <h3>Project : Amway Click</h3>
          <br />
          <p>Amway E-comerce app</p>
          <br />
          <p>React Native,Typescript</p>
          <br />
          <a
            href={"https://play.google.com/store/apps/details?id=com.sitron.amway"}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-google-play" style={iconStyle}></i>
          </a>
          <a
            href={"https://apps.apple.com/us/app/amway-click/id1546594586"}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-app-store-ios" style={iconStyle}></i>
          </a>
        </Box>
      </ContentContainer>
    </SectionContainer>
  );
}

export default WorkExpSection;

const Box = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;
const Image = styled(ImageFrame)`
  width: 100%;
  max-width: 300px;
    margin: 20px;
`;
const iconStyle = { color: "#1A5D44", fontSize: 30, margin: 10, cursor: "pointer" };
