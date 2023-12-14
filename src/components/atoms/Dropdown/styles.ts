import styled, { css } from "styled-components";

type ContainerProps = {
  $show: boolean;
};

export const Container = styled.div<ContainerProps>`
  box-shadow: var(--normalShadow);
  scrollbar-color: transparent transparent;
  transition: transform 0.15s ease;
  background-color: var(--secundary);
  scrollbar-width: thin;
  border-radius: 25px;
  position: absolute;
  overflow: auto;
  padding: 20px;
  width: 100%;
  z-index: 20;
  top: 50px;
  left: 0;
  overflow: hidden;
  transform-origin: top;
  transform: scaleY(0);

  ${({ $show }) =>
    $show &&
    css`
      transform: scaleY(1);
      transition: transform 0.15s ease;
    `}
`;
