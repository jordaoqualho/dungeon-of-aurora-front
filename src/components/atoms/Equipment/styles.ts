import styled, { css } from "styled-components";

type Props = {
  $wasDeleted: boolean;
};

export const Container = styled.div<Props>`
  margin-bottom: 8px;

  ${({ $wasDeleted }) =>
    $wasDeleted &&
    css`
      margin-bottom: 0px;
    `}

  .swiper {
    height: 100%;
    max-height: 105px;
    border-radius: 10px;

    ${({ $wasDeleted }) =>
      $wasDeleted &&
      css`
        transition: all ease 0.5s;
        transform: translate(-1000px);
        max-height: 0px;
      `}

    .delete {
      background-color: transparent;
      outline: 1px #3c3c3c solid;
      border-radius: 10px;
    }
  }
`;

export const EquipmentContainer = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  gap: 8px;
`;

export const EquipmentHeader = styled.div`
  width: 100%;

  .name {
    font-size: var(--large);
    color: var(--secundary);
  }

  .level {
    background-color: var(--background);
    color: var(--secundary);
    border-radius: 16px;
    padding: 4px 16px;
  }
`;

export const EquipmentInfo = styled.div`
  gap: 8;
  width: 100%;

  .subinfo {
    font-size: var(--small);
    color: var(--bright);
  }

  .roll_btn {
    background-color: var(--primary);
    color: var(--background);
    font-size: var(--medium);
    border-radius: 16px;
    padding: 6px 10px;
    gap: 4px;
  }
`;
