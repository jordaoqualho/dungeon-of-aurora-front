import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;

  .capability {
    background-color: var(--ground);
    width: calc(50% - 5px);
    border-radius: 10px;
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
        text-align: center;
        font-family: var(--main);
      }
    }

    p {
      font-family: var(--main);
      font-size: var(--large);
    }
  }
`;
