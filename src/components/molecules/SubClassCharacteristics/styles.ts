import styled, { css } from "styled-components";

type ContainerProps = {
  $isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
  width: 100%;
  gap: 8px;

  .title {
    background-color: var(--ground);
    border-radius: 10px;
    color: var(--bright);
    padding: 4px 8px;
    cursor: pointer;
    gap: 4px;

    p {
      margin-left: 16px;
    }

    .menu_icon {
      color: var(--bright);
      font-size: var(--large);
      transition: var(--regular);

      ${({ $isOpen }) =>
        !$isOpen &&
        css`
          transform: rotate(180deg);
        `}
    }
  }

  .class_container {
    display: flex;
    flex-direction: column;
    transition: var(--regular);
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    max-height: ${({ $isOpen }) => ($isOpen ? "5000px" : "0")};
    min-height: 500px;
    gap: 8px;

    ${({ $isOpen }) =>
      !$isOpen &&
      css`
        max-height: 0px;
        min-height: 0px;
        transition: max-height 0.3s ease-in-out;
      `}
  }
`;

export const SubClassSelector = styled.div`
  background-color: var(--ground);
  position: relative;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  gap: 8px;

  .selected {
    background-color: var(--background);
    font-size: var(--small);
    margin-top: 12px;
    border-radius: 20px;
    text-align: center;
    padding: 8px;
  }
`;

export const Selector = styled.div`
  position: relative;
  flex-wrap: wrap;
  gap: 5px;
`;
