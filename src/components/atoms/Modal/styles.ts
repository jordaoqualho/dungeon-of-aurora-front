import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
  border-radius: 10px;
  position: absolute;
  min-width: 375px;
  padding: 40px;
  height: 300px;
  z-index: 10;
  left: 20px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100; 
  -webkit-backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, -0.1);
  backdrop-filter: blur(5px);
`;