import styled from "styled-components";

export const Modal = styled.form`
  padding: 20px;
  border-radius: 20px;
  background: rgba(0, 0, 0, -0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(5px);
  border: 2px solid #54296f;
  position: relative;

  .title {
    margin-bottom: 40px;

    h1 {
      color: var(--basic);
    }

    p {
      color: var(--bright);
    }
  }
`;

export const Remember = styled.div`
  color: var(--bright);
  font-size: var(--small);
  font-weight: 600;
  text-decoration: none;

  a {
    text-decoration: none;
    color: var(--bright);

    &:hover,
    &:focus {
      color: var(--primary);
    }
  }

  .check-box {
    align-items: center;
  }
`;

export const Divisor = styled.div`
  span {
    color: var(--bright);
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: var(--border);
  }
`;

export const login_btn = {
  background: "var(--priGrad)",
  margin: "40px 0 15px 0",
};

export const signin_btn = {
  background: "var(--bacGrad)",
};

export const google_btn = {
  background: "var(--basic)",
  color: "var(--background)",
};

export const checkboxStyle = `
  .control input:checked ~ .control__indicator {
    background: var(--primary);
  }

  .control--checkbox .control__indicator:after {
    left: 5px;
    top: 2.5px;
    width: 3px;
    height: 6px;
    border: solid var(--basic);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
