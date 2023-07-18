import styled from "styled-components";

export const Container = styled.div`
  .icon {
    position: absolute;
    font-size: var(--large);
    color: var(--bright);
    z-index: 10;
    top: 20px;
    left: 20px;
  }

  input {
    background-color: var(--background);
    border: 1px solid var(--border);
    font-size: var(--medium);
    color: var(--basic);
    border-radius: 15px;
    padding: 15px 0 15px 50px;
    margin-bottom: 15px;

    &::placeholder {
      color: var(--bright);
    }

    &:focus {
      border: 1px solid var(--bright) !important;
    }
  }
`;
