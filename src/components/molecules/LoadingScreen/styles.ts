import styled from "styled-components";

export const Container = styled.div`
  background: rgba(
    0,
    0,
    0,
    0.5
  ); // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(15px);
  height: 100dvh;
  flex-wrap: wrap;
  position: fixed;
  width: 100dvw;
  z-index: 100;
  width: 100%;
  gap: 24px;
  left: 0;
  top: 0;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 4px solid var(--primary);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  padding: 0;
  box-sizing: border-box;
  animation: rotation 0.65s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
