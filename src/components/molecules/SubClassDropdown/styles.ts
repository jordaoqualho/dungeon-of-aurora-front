import styled, { css } from "styled-components";

type ContainerProps = {
  $isDropdownOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: var(--background);
  border-radius: 2dvh;
  position: relative;
  padding: 4px 24px;
  width: 100%;
  gap: 16px;

  .menu_icon {
    color: var(--secundary);
    font-size: var(--large);
    transition: var(--regular);

    ${({ $isDropdownOpen }) =>
      $isDropdownOpen &&
      css`
        transform: rotate(180deg);
      `}
  }

  .selectedSubClass {
    font-size: var(--small);
    color: var(--secundary);
    font-weight: var(--semiBold);
    background-color: var(--background);
    padding: 8px 0;
    text-align: center;
    margin: 0 0 0 32px;
    width: 100%;
  }
`;

export const Selector = styled.div`
  position: relative;
  flex-wrap: wrap;
  gap: 5px;

  .option {
    color: var(--secundary);
    font-weight: var(--semiBold);
    background-color: var(--background);
    font-size: var(--small);
    border-radius: 10px;
    width: 100%;
    padding: 5px;
  }
`;

export const dropdownStyle = {
  backgroundColor: "var(--ground)",
  padding: "10px",
  top: "48px",
};
