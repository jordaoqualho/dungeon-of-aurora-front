import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  width: 100%;
  padding: 5px;
  gap: 8px;

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: var(--background);
    color: var(--basic);
    font-size: var(--big);
    font-family: var(--main);
  }

  .name {
    font-size: var(--large);
    color: var(--primary);
  }

  .subinfo {
    font-size: var(--small);
    color: var(--bright);
  }

  .damage {
    border: 1px solid var(--primary);
    border-radius: 10px;
    padding: 10px;
    color: var(--primary);
    font-weight: 500;
  }
`;
