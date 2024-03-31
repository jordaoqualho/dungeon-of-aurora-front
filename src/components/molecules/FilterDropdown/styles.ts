import styled, { css } from "styled-components";

type Props = {
  $activeFilter: string;
};

export const Container = styled.div<Props>`
  position: relative;
  flex-wrap: wrap;
  gap: 5px;

  .option {
    background-color: var(--ground);
    color: var(--secundary);
    font-weight: var(--normal);
    font-size: var(--small);
    border-radius: 10px;
    width: 100%;
    padding: 5px;

    ${({ $activeFilter }) =>
      $activeFilter &&
      css`
        &[id="${$activeFilter}"] {
          color: var(--background);
          background-color: var(--secundary);
          font-weight: var(--semiBold);
        }
      `}
  }
`;

export const dropdownStyle = {
  backgroundColor: "var(--background)",
  outline: "1px solid var(--ground)",
  borderRadius: "16px",
  padding: "8px 5px",
  top: "40px",
};
