import styled, { css } from "styled-components";

type Props = {
  $isDropdownOpen: boolean;
};

export const Container = styled.div<Props>`
  background-color: var(--secundary);
  border-radius: 2dvh;
  position: relative;
  padding: 10px;
  width: 100%;
  gap: 16px;

  .menu_icon {
    color: var(--background);
    font-size: var(--large);
    transition: var(--regular);

    ${({ $isDropdownOpen }) =>
      $isDropdownOpen &&
      css`
        transform: rotate(180deg);
      `}
  }

  .title {
    font-size: var(--medium);
    color: var(--background);
    font-weight: var(--semiBold);
    margin-left: 18px;
  }
`;
