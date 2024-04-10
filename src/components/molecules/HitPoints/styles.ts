import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 24px;
  width: 100%;

  .title {
    font-size: var(--medium);
    margin-bottom: 4px;
  }

  .points {
    gap: 8px;
  }

  input {
    width: 20px;
    min-width: 60px;
    padding: 5px;
    background: var(--background);
    font-size: var(--big);
    font-weight: var(--semiBold);
    text-align: center;
  }

  .damage {
    background-color: var(--secundary);
    border-radius: 4px;
    margin-right: 8px;
    padding: 4px 6px;

    img {
      width: 12px;
      margin-bottom: -1px;
      color: red;
    }
  }

  .healing {
    background-color: var(--primary);
    border-radius: 4px;
    margin-left: 8px;
    padding: 4px 6px;

    img {
      width: 12px;
      margin-bottom: -1px;
    }
  }

  .damage:disabled,
  .healing:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  .life_dices {
    width: 100%;
    margin-top: 18px;

    p {
      font-weight: var(--extraLight);
      font-size: var(--small);
      color: var(--secundary);
    }

    .dices {
      margin-top: 4px;
      gap: 4px;

      img {
        width: 16px;
        flex-shrink: 0;
      }
    }

    button {
      background-color: var(--primary);
      border-radius: 20px;
      padding: 8px 12px;
      gap: 4px;

      p {
        font-size: var(--medium);
        font-weight: var(--normal);
        color: var(--background);
      }
    }
  }
`;
