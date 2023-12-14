import styled, { css } from "styled-components";

type Props = {
  $activeMenu: string;
};

export const Container = styled.div<Props>`
  position: relative;
  flex-wrap: wrap;
  gap: 5px;

  .option {
    background-color: #e9e9e9;
    color: var(--background);
    font-weight: var(--semiBold);
    font-size: var(--medium);
    border-radius: 10px;
    width: 100%;
    padding: 5px;

    ${({ $activeMenu }) =>
      $activeMenu &&
      css`
        &[id="${$activeMenu}"] {
          display: none;
        }
      `}
  }
`;
