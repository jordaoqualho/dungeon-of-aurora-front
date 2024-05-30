import styled, { css } from "styled-components";

type Props = {
  $isOpen: boolean;
};

export const Container = styled.div<Props>`
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
    gap: 8px;

    ${({ $isOpen }) =>
      !$isOpen &&
      css`
        max-height: 0px;
        transition: max-height 0.3s ease-in-out;
      `}
  }
`;

export const ClassInfo = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  gap: 8px;

  .info {
    gap: 8px;
    display: flex;
    flex-direction: column;
    h4 {
      font-size: var(--medium);
    }
    p {
      font-size: var(--small);
      color: var(--bright);
      b {
        color: var(--secundary);
      }
    }
  }

  .title {
    padding: 0;
    margin-bottom: 4px;

    h4 {
      font-size: var(--medium);
      color: var(--secundary);
    }

    .level {
      background-color: var(--primary);
      margin-left: 12px;
      color: var(--background);
      font-weight: var(--bold);
      font-size: var(--small);
      border-radius: 12px;
      padding: 4px 12px;
    }
  }
`;
