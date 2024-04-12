import styled from "styled-components";

type ContainerProps = {
  $show: boolean;
};

export const FullModal = styled.div<ContainerProps>`
  scrollbar-color: transparent transparent;
  background-color: var(--ground);
  transition: all 0.5s ease;
  scrollbar-width: thin;
  padding: 30px 20px;
  min-height: 100%;
  position: fixed;
  overflow: auto;
  width: 100%;
  z-index: 30;
  right: -100%;
  top: 0;

  ${(props) =>
    props.$show &&
    `
    right: 0;
  `}

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Container = styled.div`
  flex-wrap: wrap;
  gap: 5px;

  .option {
    background-color: var(--background);
    border-radius: 10px;
    width: 100%;
    padding: 5px;
    gap: 16px;

    .icon {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      background-color: var(--ground);
      color: var(--basic);
    }
  }
`;
