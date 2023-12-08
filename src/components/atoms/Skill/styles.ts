import styled, { css } from "styled-components";

type Props = {
  $isProficient: boolean;
};

export const Container = styled.div<Props>`
  background-color: var(--ground);
  padding: 5px 5px 5px 20px;
  font-size: var(--medium);
  border-radius: 10px;
  width: 100%;
  gap: 8px;

  .type {
    width: 50px;
  }

  .skill {
    width: 180px;
    font-size: var(--medium);
  }

  .bonus {
    background-color: var(--background);
    border-radius: 10px;
    padding: 7px;
    width: 50px;

    ${({ $isProficient }) =>
      $isProficient &&
      css`
        outline: 1px solid var(--primary);
      `}
  }
`;
