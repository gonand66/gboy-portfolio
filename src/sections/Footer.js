import React from "react";
import styled from "styled-components";
import { SectionContainer } from "../components";

function Footer() {
  return (
    <FooterContainer bgColor={"#52734d"}>
      <div>
      <P>Contact</P>
      <P>Tel : 091-592-2548</P>
      <P>Email : gonand66@gmail.com</P>
      <P>line id : gonand65</P>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled(SectionContainer)`
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
`;

const P = styled.p`
  color: #feffde;
  margin-bottom: 5px;
`;
