import React from "react";
import styled, { css } from "styled-components";

function Timeline() {
  return (
    <TimLineContainer>
      <Circle>
        Start<Message className={"start"}>October, 2020</Message>
      </Circle>
      <Line />
      <Circle end>
        End<Message className={"end"}>March, 2021</Message>
      </Circle>
    </TimLineContainer>
  );
}

export default Timeline;

const TimLineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 20px;
  margin-inline: 50px;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 55px;
  height: 55px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #1a5d44;
  margin-block: 20px;
  z-index: 2;
  position: absolute;
  cursor: default;
  ${(props) =>
    props.end &&
    css`
      bottom: 10px;
    `}
  :hover {
    background-color: #91c788;
  }
  ${(props) =>
    props.end
      ? css`
          :hover .end {
            visibility: visible;
          }
        `
      : css`
          :hover .start {
            visibility: visible;
          }
        `}
`;
const Line = styled.div`
  width: 10px;
  height: 250px;
  background-color: #1a5d44;
  z-index: 1;
  border-radius: 10px;
`;
const Message = styled.h5`
  padding: 10px;
  background: black;
  color: white;
  border-radius: 10px;
  position: absolute;
  visibility: hidden;
  right: -90px;
  top: -25px;
`;
