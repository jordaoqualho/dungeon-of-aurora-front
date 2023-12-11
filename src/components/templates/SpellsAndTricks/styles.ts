import styled from "styled-components";

export const AddButton = styled.button`
  background: var(--primary);
  color: var(--background);
  font-weight: var(--semiBold);
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
`;

export const SpellList = styled.div`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
  width: 100%;
  gap: 8px;
`;
