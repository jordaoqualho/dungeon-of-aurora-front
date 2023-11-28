import styled from 'styled-components';

type ContainerProps = {
  $show: boolean;
};

export const Container = styled.div<ContainerProps>`
  box-shadow: 0px -10px 10px 10px #0000000d;
  scrollbar-color: transparent transparent;
  background-color: var(--ground);
  border-radius: 25px 25px 0 0;
  transition: all 0.5s ease;
  scrollbar-width: thin;
  padding: 30px 20px;
  min-height: 200px;
  max-height: 50%;
  position: fixed;
  overflow: auto;
  width: 100%;
  z-index: 20;
  bottom: -100%;
  left: 0;

  ${(props) =>
    props.$show &&
    `
    bottom: 0;
  `}

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
