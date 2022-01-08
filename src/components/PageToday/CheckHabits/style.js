import styled from "styled-components";

export const Check = styled.div`
  width: 69px;
  height: 69px;
  background: ${({ checkOrUncheck }) =>
    checkOrUncheck === "check" ? "#8FC549" : "#EBEBEB"};
  border: 1px solid #e7e7e7;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }

  img {
    width: 35.09px;
    height: 28px;
  }
`;
