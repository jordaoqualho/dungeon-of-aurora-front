import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  gap: 8px;

  .search_input {
    background-color: var(--background);
    padding: 12px 16px;
    border-radius: 10px;
  }

  .spell_container {
    overflow: auto;
    width: 100%;
    height: 280px;
    gap: 4px;
  }
`;

export const SpellOption = styled.div`
  background-color: var(--background);
  border-radius: 16px;
  max-width: 100%;
  min-width: 100%;
  padding: 5px;
  gap: 8px;

  .icon {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-color: var(--ground);
    color: var(--secundary);
  }

  .name {
    font-size: var(--medium);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100vw - 280px);
  }

  .level {
    background-color: var(--ground);
    font-size: var(--small);
    border-radius: 16px;
    padding: 4px 16px;
  }

  .add {
    background-color: var(--ground);
    color: var(--bright);
    border: 1px solid var(--ground);
    border-radius: 16px;
    padding: 8px 16px;
  }

  .added {
    color: var(--primary);
    border: 1px solid var(--primary);
  }
`;

export const Buttons = styled.div`
  margin-top: 16px;
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
  top: 100px;
`;
