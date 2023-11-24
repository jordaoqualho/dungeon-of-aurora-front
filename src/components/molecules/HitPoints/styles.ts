import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--error);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  gap: 16px;

  .points {
    gap: 8px;
  }

  input {
    width: 20px;
    min-width: 40px;
    padding: 5px;
    background: var(--transparency);
    font-size: 20px;
    text-align: center;
  }
`;
