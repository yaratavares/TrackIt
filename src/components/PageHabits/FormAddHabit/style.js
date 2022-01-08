import styled from "styled-components";

export const BoxAddHabit = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 20px;
  padding: 18px 18px 15px 19px;

  background: #ffffff;
  border-radius: 5px;

  input {
    width: 100%;
    height: 45px;
    padding: 9px 0 11px 11px;

    border: 1px solid #d5d5d5;
    border-radius: 5px;

    ::placeholder {
      font-size: 19.98px;
      color: #dbdbdb;
    }

    :disabled {
      background-color: #f2f2f2;
    }
  }

  button {
    :hover {
      cursor: pointer;
    }
  }
`;

export const ButtonsAddHabits = styled.div`
  height: calc(35px + 29px);
  display: ${({ hidden }) => (hidden ? "hidden" : "flex")};
  align-items: flex-end;
  justify-content: flex-end;

  button {
    width: 84px;
    height: 35px;
    font-size: 15.98px;
    border: none;
  }

  .buttonCancel {
    color: #52b6ff;
    background: white;

    :disabled {
      color: rgba(82, 182, 255, 0.5);
    }
  }

  .buttonSave {
    margin-left: 23px;
    background: #52b6ff;
    border-radius: 4.63636px;
    color: white;

    :disabled {
      background: rgba(82, 182, 255, 0.5);
    }
  }
`;
