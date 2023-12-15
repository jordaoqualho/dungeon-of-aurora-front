import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 8px;
  width: 100%;
  gap: 24px;
`;

export const PhotoAndLevel = styled.section`
  margin-right: 24px;

  .level {
    box-shadow: -5px 5px 5px 0px #00000047;
    background: var(--primary);
    font-family: var(--main);
    font-size: var(--small);
    color: var(--background);
    font-weight: 600;
    border-radius: 15px;
    margin-left: -15px;
    margin-top: 35px;
    width: 20px;
    height: 20px;
  }

  .photo {
    width: 56px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NameAndInfo = styled.section`
  .name {
    background-color: var(--ground);
    font-family: var(--main);
    font-size: var(--large);
    margin-bottom: 4px;
    font-weight: 600;
    padding: 0;
  }

  .info {
    font-size: var(--small);
    font-weight: 200;
    border-radius: 5px;
    gap: 8px;

    p {
      font-size: var(--small);
      color: var(--bright);
    }

    button {
      background-color: var(--transparency);
      border-radius: 2px;
      color: var(--bright);
      padding: 0;
    }
  }
`;

export const ManageButton = styled.section`
  background-color: var(--ground);
  color: var(--basic);
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;

  .icon {
    font-size: var(--big);
  }
`;

type OptionProps = {
  $showOptions: boolean;
};

export const ManageOptions = styled.div<OptionProps>`
  box-shadow: -1px 16px 7px 0px #00000030;
  transition: transform 0.15s ease;
  transform-origin: top;
  transform: scaleY(0);
  background-color: #191919;
  border-radius: 0 0 20px 20px;
  margin-bottom: 16px;
  position: absolute;
  z-index: 200;
  padding: 16px;
  width: 100%;
  top: 65px;
  gap: 8px;

  ${({ $showOptions }) =>
    $showOptions &&
    css`
      transform: scaleY(1);
    `}

  button {
    border: 1px solid var(--primary);
    background-color: var(--ground);
    border-radius: 8px;
    color: var(--primary);
    padding: 4px 20px;
    width: 200px;
  }
`;
