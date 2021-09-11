import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const WrapperLoadingStyled = styled.div`
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
  @media screen and (min-width: 768px) {
    padding-top: 450px;
  }
`;

export const RotateStyled = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 4em;
`;
