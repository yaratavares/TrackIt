import styled from "styled-components";

export const DaysOfWeek = styled.button`
  width: 30px;
  height: 30px;
  margin-top: 8px;
  margin-right: 4px;

  background: ${({ days, id }) => (days.includes(id) ? "#CFCFCF" : "white")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-size: 19.98px;

  color: ${({ days, id }) => (days.includes(id) ? "white" : "#DBDBDB")};
`;
