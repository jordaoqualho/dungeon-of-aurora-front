import styled from "styled-components";

interface ContainerProps {
  $error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  .icon {
    position: absolute;
    font-size: var(--large);
    color: var(--bright);
    z-index: 10;
    top: 17px;
    left: 20px;
  }

  input {
    background-color: var(--background);
    font-size: var(--medium);
    color: var(--basic);
    border-radius: 15px;
    padding: 11.5px 0 11.5px 50px;
    margin-bottom: 15px;
    border: ${(props) => (props.$error ? "1px solid var(--error) !important" : "1px solid var(--border)")};

    &::placeholder {
      color: var(--bright);
    }

    &:focus {
      border: 1px solid var(--bright);
    }
  }
`;
