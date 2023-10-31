import styled from "styled-components";

export const Container = styled.div`
  width: -webkit-fill-available;
  position: relative;
  height: 100vh;
  padding: 20px;

  .landscape {
    position: absolute;
    object-fit: cover;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
  }
`;

