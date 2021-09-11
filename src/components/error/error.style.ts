import styled from "styled-components";

export const WrapperErrorStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  max-width: 100%;
  text-align: center;
  padding-top: 330px;
  font-size: 1.5em;
  @media screen and (min-width: 768px) {
    padding-top: 450px;
  }
  svg {
    font-size: 4em;
  }
  p {
    font-size: 1em;
  }
`;
