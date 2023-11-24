import styled from "styled-components";

export const AddButton = styled.button`
  width: 100%;
  padding: 8px 0;
  border-radius: 10px;
  background: var(--primary);
  border: 1px solid var(--border);
  color: var(--basic);
  font-weight: 500;
`;

export const SpellList = styled.div`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
  width: 100%;
  gap: 8px;

  .container {
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
  }
`;
