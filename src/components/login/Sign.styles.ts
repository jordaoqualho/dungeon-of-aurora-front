import styled from "styled-components";

export const Modal = styled.form`
  box-shadow: var(--normalShadow);
  background-color: var(--contrast);
  border-radius: 40px;
  margin-right: 20px;
  height: 710px;
  padding: 50px;
  width: 450px;

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
`;

export const Divisor = styled.div`
  span {
    color: var(--bright);
  }
  .line {
    width: 200px;
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
