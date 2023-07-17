import styled from "styled-components";

export const Container = styled.label`
  .control {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
  }
  .control input {
    position: absolute;
    opacity: 0;
  }
  .control__indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 15px;
    width: 15px;
    background: transparent;
    border: 1px solid var(--bright);
    border-radius: 5px;
  }
  .control:hover input ~ .control__indicator,
  .control input:focus ~ .control__indicator {
    background: var(--bright);
  }
  .control input:checked ~ .control__indicator {
    background: var(--primary);
  }
  .control input:disabled ~ .control__indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  .control__indicator:after {
    content: "";
    position: absolute;
    display: none;
  }
  .control input:checked ~ .control__indicator:after {
    display: block;
  }
  .control--checkbox .control__indicator:after {
    left: 4px;
    top: 2px;
    width: 3px;
    height: 6px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .control--checkbox input:disabled ~ .control__indicator:after {
    border-color: red;
  }
`;
