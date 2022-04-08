import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 75px;
  position: fixed;
  top: 0;
  background: var(--color-gray-6);
  border-bottom: 1px solid var(--color-black);
  z-index: 20;

  nav {
    padding: 15px 150px 15px 0;

    ul {
      width: 300px;
      display: flex;
      justify-content: space-around;

      li {
        a {
          color: var(--color-white);

          :hover {
            cursor: pointer;
            color: var(--color-red);
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
