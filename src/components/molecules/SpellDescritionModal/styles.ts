import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  gap: 8px;

  .title {
    margin-bottom: 24px;

    h4 {
      font-size: var(--huge);
      line-height: 24px;
    }

    span {
      padding: 0;
      font-size: var(--medium);
      font-weight: 300;
      color: var(--bright);
    }
  }

  .description {
    max-height: 300px;
    overflow: hidden auto;

    &::-webkit-scrollbar-thumb {
      background-color: var(--bright);
    }

    &::-webkit-scrollbar-track {
      background-color: var(--transparency);
    }
  }

  .text {
    line-break: white;
    margin-bottom: 2px;

    span {
      font-size: var(--medium);
      color: var(--bright);
      font-weight: 300;
      padding: 0;
    }
  }

  .close_btn {
    position: absolute;
    background-color: var(--transparency);
    border-radius: 10px;
    color: var(--bright);
    padding: 5px;
    right: -15px;
    top: -25px;

    svg {
      font-size: var(--big);
    }
  }
`;

export const modalStyles = `
  border-radius: 10px;
  padding: 30px 20px;
  top: 20vh;
`;
