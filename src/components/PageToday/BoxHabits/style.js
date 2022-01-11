import styled from "styled-components";

export const Habit = styled.div`
  width: 100%;
  min-height: 94px;
  padding: 13px 13px 12px 15px;
  margin-bottom: 10px;

  border-radius: 5px;
  background-color: white;
  color: #666666;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .tittleAndInformations {
    h3 {
      font-size: 19.98px;
    }

    p {
      margin-top: 8px;
      line-height: 16px;
      font-size: 12.98px;

      span.record {
        color: ${({ greenRecord }) => (greenRecord ? "#8FC549" : "#666666")};
      }

      span.sequence {
        color: ${({ greenSequence }) =>
          greenSequence ? "#8FC549" : "#666666"};
      }
    }
  }
`;
