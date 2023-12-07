import styled from "styled-components";

export const Container = styled.div`
  width: calc(25% - 8px);
  gap: 8px;

  .mod {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    outline: 1px solid var(--border);

    input {
      min-width: 25px;
      text-align: center;
      font-size: var(--big);
      font-family: var(--main);
      font-weight: var(--semiBold);
    }
  }

  p {
    font-family: var(--main);
    font-size: var(--small);
  }
`;
