import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--ground);
  box-shadow: 0px -10px 10px 10px #0000003d;
  border-radius: 25px 25px 0 0;
  position: fixed;
  width: 100%;
  padding: 30px 20px;
  max-height: 50%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  min-height: 200px;
  z-index: 20;
  bottom: 0;
  left: 0;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
