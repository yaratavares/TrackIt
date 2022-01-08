import styled from "styled-components";

export const Habits = styled.div`
  width: 100%;
  height: 91px;
  margin-top: 20px;
  padding: 13px 10px 15px 15px;
  background-color: white;
  border-radius: 5px;

  .titleHabit {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 13px;
      height: 18px;
      cursor: pointer;
    }

    h3 {
      margin-bottom: 8px;
      color: #666666;
      font-size: 19.98px;
    }
  }
`;
