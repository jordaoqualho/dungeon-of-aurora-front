import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 8px;
  width: 100%;
  gap: 24px;

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

  .name {
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

export const Controls = styled.section`
  position: relative;

  .control_button {
    background-color: var(--ground);
    color: var(--basic);
    border-radius: 20px;
    cursor: pointer;
    padding: 5px;

    .icon {
      font-size: var(--big);
    }
  }

  .control_options {
    box-shadow: -5px 5px 10px 0px #0000003d;
    background-color: var(--ground);
    border-radius: 10px;
    position: absolute;
    padding: 20px;
    z-index: 100;
    top: 40px;
    gap: 5px;
    right: 0;

    button {
      color: var(--basic);
      font-weight: 400;
      min-width: 100px;
      text-align: center;
      padding: 10px;
      border-radius: 10px;
      background-color: var(--background);
    }
  }
`;