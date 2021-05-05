import styled from "styled-components";

const SectionContainer = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#91c788")};
  padding: 30px;
`;

export default SectionContainer;
