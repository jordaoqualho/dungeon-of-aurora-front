import styled from "styled-components";

export const Container = styled.div`
  width: calc(30% - 10px);
  position: relative;

  .mod {
    border-radius: 10px;

    input {
      height: 50px;
      width: 84px;
      min-width: 25px;
      text-align: center;
      font-size: var(--big);
      font-family: var(--main);
      font-weight: var(--semiBold);
      background-color: transparent;
      margin-bottom: 46px;
      z-index: 5;
    }
  }

  p {
    font-size: var(--small);
    font-family: var(--main);
    text-transform: uppercase;
    margin-bottom: 28px;
  }

  span {
    outline: 1px solid var(--border);
    background-color: var(--ground);
    font-size: var(--medium);
    text-align: center;
    border-radius: 5px;
    line-height: 12px;
    position: absolute;
    height: 32px;
    bottom: 12px;
    width: 43px;
    z-index: 2;
  }

  img {
    position: absolute;
    z-index: 1;
  }
`;

