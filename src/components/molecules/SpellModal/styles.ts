import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  gap: 16px;

  .buttons {
    gap: 16px;

    button {
      border-radius: 10px;
      color: var(--white);
      padding: 8px 24px;
      min-width: 100px;
      width: 100%;
    }

    .save {
      background-color: var(--primary);
    }

    .cancel {
      background-color: var(--border);
    }
  }
`;

export const modalStyles = `
  border-radius: 10px;
  top: 30vh;
`;
