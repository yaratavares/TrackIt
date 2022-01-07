import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  position: fixed;
  bottom: 0;
  z-index: 1;

  .spaceProgressBar {
    position: relative;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #52b6ff;
      font-size: 17.98px;
    }

    :hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }
`;

export const ProgressBar = styled.div`
  width: 91px;
  height: 91px;
  font-family: "Lexend Deca", sans-serif;

  position: absolute;
  bottom: 10px;
  right: 50%;
  left: 50%;
  transform: translate(-50%);
`;
