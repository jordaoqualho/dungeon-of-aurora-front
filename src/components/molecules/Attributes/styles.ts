import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  flex-wrap: wrap;
  padding: 24px 16px;
  width: 100%;
  gap: 24px;

  .title {
    width: 100%;
    text-align: center;
    font-weight: var(--semiBold);
  }
`;
