import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 17px;
  margin-top: 70px;

  span {
    font-size: 20px;
  }
`;

export const Section = styled.section`
  width: 100%;

  p:nth-child(1) {
    margin-top: 10px;
  }
  p:nth-child(2) {
    margin: 10px 0 0 50px;
  }
  div:nth-child(3) {
    margin: 0 0 20px 70px;
    width: 90%;
  }

  p {
    display: flex;
    font-size: 20px;
    gap: 10px;
    span {
      color: var(--color-red);
    }
  }
  div {
    span {
      color: var(--color-red);
      font-size: 20px;
      font-weight: normal;
    }
    h2 {
      margin-left: 20px;
    }
    span:nth-child(3) {
      margin-left: 20px;
    }
    span:nth-child(5) {
      margin-left: 20px;
    }
    span:nth-child(7) {
      margin-left: 20px;
    }
    span:nth-child(9) {
      margin-left: 20px;
    }

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 20px;
      li {
        a {
          figure {
            img {
              width: 350px;
              height: 177px;
            }
          }
        }
      }
    }
  }
`;
