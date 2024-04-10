import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;

  .search_input {
    background-color: var(--background);
    padding: 12px 16px;
    border-radius: 10px;
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const FastButtons = styled.div`
  width: 100%;
  gap: 8px;

  button {
    border-radius: 8px;
    color: var(--secundary);
    background-color: var(--background);
    font-weight: var(--semiBold);
    padding: 4px 8px;
    width: 100%;
  }
`;

export const Buttons = styled.div`
  margin-top: 24px;
  width: 100%;
  gap: 16px;

  button {
    border-radius: 15px;
    color: var(--white);
    padding: 8px 24px;
    min-width: 100px;
    width: 100%;
  }

  .save {
    background-color: var(--primary);
    font-weight: var(--semiBold);
    color: var(--background);
  }

  .cancel {
    background-color: var(--background);
  }
`;

export const modalStyles = `
  border-radius: 10px;
  top: 30vh;
`;
