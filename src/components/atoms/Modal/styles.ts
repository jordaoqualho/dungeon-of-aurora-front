import styled, { css } from "styled-components";

type ContainerProps = {
  $customStyle?: string;
};

export const Container = styled.div<ContainerProps>`
  box-shadow: 0px 0px 20px 0px #0000003d;
  background-color: var(--ground);
  width: calc(100% - 40px);
  border-radius: 20px;
  position: fixed;
  padding: 20px;
  z-index: 20;
  left: 20px;
  top: 85vh;

  ${({ $customStyle }) =>
    $customStyle &&
    css`
      ${$customStyle};
    `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  -webkit-backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, -0.1);
  backdrop-filter: blur(5px);
`;
