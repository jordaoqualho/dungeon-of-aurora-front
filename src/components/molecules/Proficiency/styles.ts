import styled from "styled-components";

export const Container = styled.div`
  gap: 5px;
  width: 100%;
  margin-bottom: 120px;

  .prof {
    background-color: var(--ground);
    padding: 5px 5px 5px 20px;
    font-size: var(--medium);
    border-radius: 10px;
    width: 100%;
    gap: 8px;

    input {
      background-color: var(--background);
      min-width: 10px;
      height: 15px;
      width: 15px;
    }

    .type {
      width: 50px;
    }

    .skill {
      width: 140px;
    }
  }

  .bonus {
    background-color: var(--background);
    border-radius: 10px;
    padding: 7px;
    width: 35px;
  }
`;
