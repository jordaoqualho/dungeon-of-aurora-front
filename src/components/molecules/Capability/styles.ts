import styled, { css } from "styled-components";

type Props = {
  $hexagonBorder: boolean;
};

export const Container = styled.div<Props>`
  width: calc(25% - 8px);
  position: relative;
  gap: 8px;

  .mod {
    width: 50px;
    height: 50px;
    border-radius: 10px;

    ${({ $hexagonBorder }) =>
      !$hexagonBorder &&
      css`
        outline: 1px solid var(--border);
      `}

    input {
      z-index: 5;
      min-width: 70px;
      text-align: center;
      font-size: var(--big);
      font-family: var(--main);
      font-weight: var(--semiBold);
      background-color: transparent;
    }
  }

  p {
    font-family: var(--main);
    font-size: var(--small);
  }

  .hexagon {
    position: absolute;
    z-index: 1;
  }
`;
