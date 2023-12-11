import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  gap: 8px;

  .header {
    width: 100%;

    .name {
      font-size: var(--large);
      color: var(--primary);
    }

    .level {
      background-color: var(--background);
      color: var(--secundary);
      border-radius: 16px;
      padding: 4px 16px;
    }
  }

  .info {
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
  }
`;
