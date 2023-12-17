import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  margin-bottom: 100px;
  display: flex;
  gap: 16px;
  width: 100%;
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

