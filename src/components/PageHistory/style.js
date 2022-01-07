import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: calc(70px + 22px) 18px;

  background-color: #ebebeb;
`;

export const TopoMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #126ba5;
    font-size: 22.98px;
  }
`;

export const Text = styled.div`
  margin-top: 28px;
  font-size: 17.98px;
  line-height: 22px;
  color: #666666;
`;
