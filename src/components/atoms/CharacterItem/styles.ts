import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  border-radius: 20px;
  padding: 8px;
  width: 100%;
`;

export const PhotoAndLevel = styled.section`
  margin-right: 24px;

  .level {
    box-shadow: -5px 5px 5px 0px #00000047;
    background: var(--primary);
    font-family: var(--main);
    font-size: var(--small);
    color: var(--background);
    font-weight: 600;
    border-radius: 12px;
    margin-left: -12px;
    margin-top: 30px;
    width: 16px;
    height: 16px;
  }

  .photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NameAndInfo = styled.section`
  .name {
    background-color: var(--background);
    font-family: var(--main);
    font-size: var(--medium);
    margin-bottom: 4px;
    font-weight: 600;
    padding: 0;
  }

  .info {
    font-size: var(--small);
    font-weight: 200;
    border-radius: 5px;
    gap: 8px;

    p {
      font-size: var(--small);
      color: var(--bright);
    }

    button {
      background-color: var(--transparency);
      border-radius: 2px;
      color: var(--bright);
      padding: 0;
    }
  }
`;
