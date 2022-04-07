import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;

  span:nth-child(2) {
    margin-bottom: 100px;
  }
  span:nth-child(8) {
    margin-bottom: 20px;
  }

  h1 {
    width: 280px;
  }
  button {
    width: 176px;
    height: 42px;
    color: var(--color-red);
    border: 1px solid var(--color-red);
    background: transparent;
    transition: 0.3s;
    margin-bottom: 130px;

    :hover {
      color: var(--color-gray-5);
      background: var(--color-red);
    }
  }
`;
