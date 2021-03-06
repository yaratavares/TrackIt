import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    height: 178.83px;

    margin-top: 68px;
    margin-bottom: 32.62px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 45px;
    width: 303px;
    margin-bottom: 6px;
    padding-left: 11px;

    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 19.98px;

    :disabled {
      background: #f2f2f2;
    }

    ::placeholder {
      color: #dbdbdb;
    }
  }

  button {
    height: 45px;
    width: 303px;
    margin-bottom: 25px;

    background: #52b6ff;
    border-radius: 4.63636px;
    font-size: 20.98px;
    color: #ffffff;
    border: none;

    :disabled {
      background: rgba(82, 182, 255, 0.5);
    }

    :hover {
      cursor: pointer;
    }
  }

  p {
    color: #52b6ff;
    font-size: 13.98px;

    :hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }

  @media (max-width: 375px) {
    p {
      text-decoration-line: underline;
    }
  }
`;

export default Container;
