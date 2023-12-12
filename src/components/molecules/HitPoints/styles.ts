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
    min-width: 50px;
    padding: 5px;
    background: var(--background);
    font-size: var(--big);
    font-weight: var(--semiBold);
    text-align: center;
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
        width: 14px;
        height: 14px;
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
