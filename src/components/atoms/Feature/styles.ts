import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  gap: 8px;

  .info {
    gap: 8px;
    display: flex;
    flex-direction: column;

    .title {
      padding: 0;
      margin-bottom: 4px;

      h4 {
        font-size: var(--medium);
        color: var(--secundary);
      }

      .level {
        background-color: var(--primary);
        white-space: nowrap;
        margin-left: 12px;
        color: var(--background);
        font-weight: var(--bold);
        font-size: var(--small);
        border-radius: 12px;
        padding: 4px 12px;
      }

      .locked {
        background-color: var(--secundary);
        opacity: 0.5;
      }
    }

    strong {
      color: var(--secundary);
    }
    p {
      font-size: var(--small);
      color: var(--bright);
      b {
        color: var(--secundary);
      }
    }
  }
`;
