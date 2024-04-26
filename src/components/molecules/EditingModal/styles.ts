import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  gap: 16px;

  .buttons {
    gap: 16px;

    button {
      border-radius: 10px;
      color: var(--white);
      font-weight: var(--semiBold);
      padding: 8px 24px;
      min-width: 100px;
      width: 100%;
      max-height: 32px;
    }

    .save {
      background-color: var(--primary);
      color: var(--background);
    }

    .cancel {
      background-color: var(--background);
    }
  }
`;

export const modalStyles = `
  border: 1px solid var(--border);
`;
