import styled from "styled-components";
import { keyframes } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 17px;
  margin: 70px 0 0 0;
  h1 {
    width: 100%;
  }
  button {
    width: 176px;
    height: 42px;
    color: var(--color-red);
    border: 1px solid var(--color-red);
    background: transparent;
    transition: 0.3s;
    margin: 0 0 110px 70px;

    :hover {
      color: var(--color-gray-5);
      background: var(--color-red);
    }
  }
`;

export const Greeting = styled.div`
  width: 100%;

  .typist {
    height: 512px;
  }

  p:nth-child(2) {
    margin: 10px 0 0 50px;
  }
  h1:nth-child(3) {
    margin: 20px 0 20px 100px;
    width: 70vw;
  }
  p:nth-child(4) {
    margin: 20px 0 20px 115px;
  }
  p:nth-child(5) {
    margin: 10px 0 0 50px;
  }
  p:nth-child(6) {
    margin: 10px 0 50px 0;
  }

  p {
    display: flex;
    font-size: 20px;
    gap: 10px;
    span {
      color: var(--color-red);
    }
  }
  h1 {
    font-size: 50px;

    h1:nth-child(2) {
      margin: 0 0 0px 80px;
    }
    h1:nth-child(3) {
      margin: 0 0 0px 85px;
    }
    h1 {
      margin: 0;
      width: auto;
    }
    span {
      margin: 0 15px;
      font-weight: normal;
      font-size: 20px;
      color: var(--color-red);
    }
  }
`;
const scrollDownAnimation = keyframes`
 0% { margin: 0 0 0 0 }
 50% { margin: 0 0 40px 0 }
 100% { margin: 0 0 0 0 }
`;
export const ScrollDown = styled.div`
  height: 20px;
  position: fixed;
  bottom: 70px;
  right: 0;
  font-size: 12px;
  animation-name: ${scrollDownAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transform: rotate(90deg);

  svg {
    padding-top: 15px;
    font-size: 25px;
  }
`;
