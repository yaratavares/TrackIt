import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  padding: 10px 18px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 1;

  h1 {
    font-size: 38.98px;
    color: white;
  }

  img {
    width: 51px;
    height: 51px;

    clip-path: circle();
  }
`;

export default HeaderContainer;
