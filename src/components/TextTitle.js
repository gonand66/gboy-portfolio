import styled from "styled-components";

const TextTitle = styled.p`
  color: ${(props) => (props.color ? props.color : "#feffde")};
  text-align: center;
  font-size: 30px;
  cursor: default;
`;

export default TextTitle;
