import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  gap: 8px;

  .title {
    margin-bottom: 16px;
    font-weight: var(--bold);
  }

  .slots_container {
    flex-wrap: wrap;
    max-width: 100%;
    gap: 24px;
  }
`;
