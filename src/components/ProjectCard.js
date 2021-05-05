import React from "react";
import styled from "styled-components";
import IMAGES from "../assets";

function ProjectCard() {
  return <Image src={IMAGES.g_music1} />;
}

export default ProjectCard;

const Image = styled.img`
  max-width: 500px;
  width: 100%;
  border: 1.5vh solid white;
  border-radius: 2px;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: translateX(1px) translateY(1px);
  }
`;
