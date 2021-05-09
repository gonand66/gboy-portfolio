import React, { useState } from "react";
import styled from "styled-components";

function MyDetailBox() {
  const [activeButton, setbutton] = useState("Personal");

  const renderButton = (text) => {
    return (
      <CircleButton active={activeButton === text} onClick={() => setbutton(text)}>
        {text}
      </CircleButton>
    );
  };

  const renderRightSide = () => {
    switch (activeButton) {
      case "Personal":
        return renderPersonal();
      case "Hobby":
        return renderHobby();
      case "Education":
        return renderEducation();
      default:
        return renderPersonal();
    }
  };

  const renderPersonal = () => {
    return (
      <RightSide>
        <h3>Personal Details</h3> <br />
        <p>Name Natthapong Songngam (Gone)</p> <br />
        <p>Birth Date : 7 Dec 1997</p> <br />
        <p>Age : 23</p> <br />
        <p>Heigh : 167 cm. Weight :62 kg.</p> <br />
        <p>Languege : Thai, English</p> <br />
      </RightSide>
    );
  };
  const renderHobby = () => {
    return (
      <RightSide>
        <h3>My Hobby</h3> <br />
        <p>I always love to write lyrics or make hiphop beat for fun.</p> <br />
        <p>Check out some of my songs here.</p>
        <a
          href={"https://open.spotify.com/artist/0gSwg7QR9ZDhBEX9Ab0jVk?si=qhvMdu-FSi2oL7bYT7gSBw"}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-spotify" style={SpotyStyle}></i>
        </a>
        <a href={"https://www.youtube.com/watch?v=SQTXLiFAApU"} target="_blank" rel="noreferrer">
          <i className="fab fa-youtube" style={YtStyle}></i>
        </a>
      </RightSide>
    );
  };
  const renderEducation = () => {
    return (
      <RightSide>
        <h3>Education history</h3> <br />
        <p>King Mongkut's Institute of Technology Ladkrabang (KMITL)</p>
        <li>Bachelor’s Degree in Telecomunications Engineering</li>
        <br />
        <p>Surasak Montree School</p>
        <li>Sci-Math IEP Program</li>
        <br />
      </RightSide>
    );
  };

  return (
    <Container>
      <LeftSide>
        {renderButton("Personal")}
        {renderButton("Hobby")}
        {renderButton("Education")}
      </LeftSide>
      {renderRightSide()}
    </Container>
  );
}

export default MyDetailBox;

const Container = styled.div`
  background-color: #feffde;
  height: 260px;
  width: 500px;
  margin-block: 20px;
  display: flex;
  padding: 5px;
  border-radius: 5px;
  overflow: auto;
  resize: both;
  overflow: auto;
`;
const LeftSide = styled.div`
  width: 100px;
`;
const CircleButton = styled.button`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background: ${(props) =>
    props.active ? " linear-gradient(to right, #56ab2f, #a8e063);" : "a0937d"};
  margin: 7px;
  border: none;
  color: ${(props) => (props.active ? "white" : "#766161")};
  box-shadow: 1px 1px 2px grey;
  :active {
    background: linear-gradient(to right, #56ab2f, #a8e063);
  }
`;
const RightSide = styled.div`
  width: 100%;
  padding: 20px;
`;
const YtStyle = { fontSize: 40, color: "red", cursor: "pointer" };
const SpotyStyle = { fontSize: 40, color: "#1DB954", cursor: "pointer", margin: 20 };
