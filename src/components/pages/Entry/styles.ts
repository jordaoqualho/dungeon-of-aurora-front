import styled from "styled-components";

export const Container = styled.div`
  width: -webkit-fill-available;
  background-color: var(--background);
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

  .version {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: var(--bright);
    font-size: var(--micro);
  }
`;

