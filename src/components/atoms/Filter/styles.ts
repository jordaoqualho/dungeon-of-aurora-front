import styled, { css } from "styled-components";

type Props = {
  $isFilterOpen: boolean;
  noActiveFilter: boolean;
};

export const Container = styled.div<Props>`
  background-color: var(--background);
  outline: 1px solid var(--background);
  border-radius: 2dvh;
  position: relative;
  padding: 8px 16px;
  width: 100%;

  .menu_icon {
    color: var(--secundary);
    font-size: var(--large);
    transition: var(--regular);

    ${({ $isFilterOpen }) =>
      $isFilterOpen &&
      css`
        transform: rotate(180deg);
      `}

    ${({ noActiveFilter }) =>
      !noActiveFilter &&
      css`
        color: var(--primary);
      `}
  }

  .title {
    font-size: var(--small);
    color: var(--secundary);
    font-weight: var(--normal);
    max-width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ noActiveFilter }) =>
      !noActiveFilter &&
      css`
        color: var(--primary);
      `}
  }
`;
