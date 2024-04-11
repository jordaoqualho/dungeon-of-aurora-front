import styled from "styled-components";

export const Container = styled.div`
  padding: 4px 12px;
  gap: 8px;

  .level {
    font-size: var(--small);
  }

  .slots {
    gap: 8px;
  }

  .square {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 2px;
    width: 12px;
    height: 12px;
  }

  .unfilled {
    background-color: var(--transparency);
  }
`;
