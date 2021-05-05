import React from "react";
import styled from "styled-components";
import { SectionContainer } from "../components";

function Footer() {
  return (
    <FooterContainer bgColor={"#52734d"}>
      <P>Contact</P>
      <P>Tel : 091-592-2548</P>
      <P>Email : gonand66@gmail.com</P>
      <P>line id : gonand65</P>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled(SectionContainer)`
  /* margin-top: 30px; */
`;

const P = styled.p`
  color: #feffde;
  margin-bottom: 5px;
`;
