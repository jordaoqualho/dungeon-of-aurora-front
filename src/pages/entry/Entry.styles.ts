import styled from "styled-components";

export const Container = styled.div`
  width: -webkit-fill-available;
  position: relative;
  height: 100vh;
  padding: 40px;

  .castle_img {
    width: 450px;
    height: 100%;
    background: var(--bright);
    box-shadow: var(--normalShadow);
    border-radius: 20px;
    object-fit: cover;
  }
`;

