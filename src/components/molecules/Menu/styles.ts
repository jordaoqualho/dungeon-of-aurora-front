import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ground);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  gap: 16px;

  .icon_box {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: var(--background);

    .menu_icon {
      font-size: var(--huge);
    }
  }

  .title {
    text-transform: uppercase;
    font-family: var(--main);
    font-size: var(--huge);
  }
`;
