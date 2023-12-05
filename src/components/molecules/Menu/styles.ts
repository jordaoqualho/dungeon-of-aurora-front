import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secundary);
  border-radius: 2dvh;
  padding: 10px;
  width: 100%;
  gap: 16px;

  .menu_icon {
    color: var(--background);
    font-size: var(--large);
  }

  .title {
    font-size: var(--medium);
    color: var(--background);
    font-weight: var(--semiBold);
    margin-left: 18px;
  }
`;
