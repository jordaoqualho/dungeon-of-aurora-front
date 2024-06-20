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

  .sleep_button {
    background-color: var(--secundary);
    position: absolute;
    right: 15px;
    top: 15px;
    border-radius: 50%;
    padding: 2px 4px;

    img {
      margin-bottom: -1px;
      margin-top: 2px;
    }
  }

  .inspiration_button {
    background-color: var(--bright);
    position: absolute;
    left: 15px;
    top: 15px;
    border-radius: 50%;
    padding: 2px 4px;

    img {
      margin-bottom: -1px;
      margin-top: 2px;
    }
  }

  .inspired {
    background-color: var(--primary);
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
    margin-top: 24px;

    p {
      font-weight: var(--extraLight);
      font-size: var(--small);
      color: var(--secundary);
    }

    .dices {
      flex-wrap: wrap;
      margin-top: 4px;
      max-width: 55vw;
      gap: 4px;

      .used {
        opacity: 0.25;
      }
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
