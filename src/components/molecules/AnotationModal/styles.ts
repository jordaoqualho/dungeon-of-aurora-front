import styled from "styled-components";

type ContainerProps = {
  $show: boolean;
};

type HeaderProps = {
  $isEditing: boolean;
};

type BodyProps = {
  $isEditing: boolean;
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

export const Header = styled.div<HeaderProps>`
  width: 100%;
  margin-bottom: 16px;

  .arrow_btn {
    background-color: var(--background);
    color: var(--secundary);
    border-radius: 20px;
    padding: 8px 24px;
    margin-right: 12px;
    height: 36px;

    svg {
      font-size: var(--large);
    }
  }

  .action_btn {
    background-color: var(--secundary);
    color: var(--background);
    font-weight: var(--semiBold);
    border-radius: 20px;
    height: 36px;
    width: 90px;

    ${(props) =>
      props.$isEditing &&
      `
        background-color: var(--primary);
      `}
  }
`;

export const Body = styled.div<BodyProps>`
  width: 100%;
  height: 100%;

  .title {
    font-size: var(--big);
    font-weight: var(--bold);
    background-color: transparent;
    width: 100%;
    color: var(--secundary);
    margin-bottom: 8px;
    border-radius: 10px;
    scrollbar-width: none;
    resize: none;
    height: 32px;

    ${(props) =>
      props.$isEditing &&
      `
      border: 1px solid var(--bright);   
      padding: 16px;
      height: 64px;
      `}
  }

  .info_field {
    background-color: transparent;
    font-size: var(--medium);
    height: calc(100vh - 200px);
    color: var(--secundary);
    border-radius: 10px;
    width: 100%;
    resize: none;

    ${(props) =>
      props.$isEditing &&
      `
      border: 1px solid var(--bright);   
      padding: 16px;
      `}
  }
`;
