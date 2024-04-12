import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 16px;
  max-height: 100px;
  padding: 16px;
  width: 100%;

  input {
    min-width: 60px;
    width: 60px;
    height: 32px;
    border: 1px solid var(--primary);
    border-radius: 6px;
    color: var(--secundary);
    text-align: center;
  }
`;
