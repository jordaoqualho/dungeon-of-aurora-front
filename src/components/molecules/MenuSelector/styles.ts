import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  gap: 5px;

  .option {
    background-color: var(--background);
    border-radius: 10px;
    width: 100%;
    padding: 5px;
    gap: 16px;

    .icon {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      background-color: var(--ground);
      color: var(--basic);
    }
  }
`;
