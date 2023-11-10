import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;

  .capability {
    background-color: var(--ground);
    width: calc(50% - 5px);
    border-radius: 10px;
    position: relative;
    padding: 10px;
    gap: 16px;

    .mod {
      width: 50px;
      height: 50px;
      background-color: var(--background);
      border-radius: 10px;

      input {
        min-width: 25px;
        font-size: var(--big);
        text-align: center;      font-family: var(--main);
      }
    }

    p {
      font-family: var(--main);
      font-size: var(--large);
    }

    .points {
      position: absolute;
      height: 100%;
      gap: 4px;
      right: 0;

      .mark {
        background-color: var(--background);
        border-radius: 2px 0 0 2px;
        width: 12px;
        height: 5px;
      }

      .positive {
        background-color: var(--success);
        border-radius: 2px 0 0 2px;
        width: 12px;
        height: 5px;
      }

      .negative {
        background-color: var(--error);
        border-radius: 2px 0 0 2px;
        width: 12px;
        height: 5px;
      }
    }
  }
`;
