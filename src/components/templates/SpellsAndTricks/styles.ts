import styled from "styled-components";

export const AddButton = styled.button`
  box-shadow: var(--normalShadow);
  font-weight: var(--semiBold);
  background: var(--secundary);
  color: var(--background);
  font-size: var(--huge);
  border-radius: 30px;
  align-items: center;
  position: absolute;
  line-height: 0;
  display: grid;
  height: 48px;
  width: 48px;
  bottom: 40px;
  right: 20px;
  z-index: 10;
  padding: 0;
`;

export const SpellList = styled.div`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
  width: 100%;
  max-height: calc(100dvh - 200px);
  overflow: auto;
  gap: 8px;
`;
