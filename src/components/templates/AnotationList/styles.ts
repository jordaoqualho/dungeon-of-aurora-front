import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  overflow: auto;
  scrollbar-width: none;
`;

export const AddButton = styled.button`
  box-shadow: var(--normalShadow);
  font-weight: var(--semiBold);
  background: var(--secundary);
  color: var(--background);
  font-size: var(--huge);
  border-radius: 30px;
  align-items: center;
  position: fixed;
  line-height: 0;
  display: grid;
  height: 48px;
  width: 48px;
  top: 90dvh;
  right: 20px;
  z-index: 10;
  padding: 0;
`;
