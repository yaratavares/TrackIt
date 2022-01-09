import styled from "styled-components";

export const PercentageDay = styled.h2`
  font-size: 17.976px;
  color: ${({ percentage }) => (percentage === 0 ? "#bababa" : "#8FC549")};
  margin-bottom: 28px;
  margin-top: 4px;
`;
