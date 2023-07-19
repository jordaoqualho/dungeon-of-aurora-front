import styled from "styled-components";

export const Container = styled.div`
  button {
    font-size: var(--medium);
    color: var(--background);
    border-radius: 15px;
    color: var(--basic);
    font-weight: 600;
    padding: 20px;
    width: 100%;

    &:focus {
      opacity: 0.75;
    }

    img {
      width: 20px;
      margin-right: 15px;
    }
  }
`;

export const Loader = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid var(--background);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  padding: 0;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
