import styled from "styled-components";
import { NavProps } from ".";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: var(--color-black);
  position: fixed;
  transform: ${({ open }: NavProps) =>
    open ? "translateX(0)" : "translateX(100%)"};
  top: 0;
  right: 0;
  height: 100vh;
  width: 160px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  border: 1px solid var(--color-black);

  li {
    background: var(--color-gray-6);
    border-bottom: 1px solid var(--color-gray-4);

    width: 100%;
    height: 50px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: var(--a-font-size);
      color: var(--color-gray-2);
      transition: 0.3s;

      :hover {
        color: var(--color-red);
      }
    }
  }
`;
