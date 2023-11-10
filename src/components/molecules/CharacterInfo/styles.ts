import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  gap: 24px;

  .level {
    box-shadow: -5px 5px 5px 0px #00000047;
    background: var(--primary);
    font-family: var(--main);
    font-size: var(--small);
    padding: 8px 12px;
    border-radius: 10px;
    margin-left: -15px;
  }

  .photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    outline: 3px solid var(--primary);
  }

  .name {
    font-family: var(--main);
    font-size: var(--big);
    text-transform: uppercase;
  }

  .info {
    font-size: var(--medium);
    font-weight: 200;
    border-radius: 5px;
    gap: 8px;

    p{
      font-size: var(--small);
      color: var(--bright);
    }

    button {
      background-color: var(--transparency);
      color: var(--bright);
      padding: 0;
    }
  }
`;