import styled from "styled-components";

export const Container = styled.div`
  width: -webkit-fill-available;
  position: relative;
  height: 100vh;
  padding: 40px;

  .logo {
    font-size: var(--huge);
    font-weight: 500;
  }
`;

export const Form = styled.form`
  gap: 10px;

  .castle_img {
    width: 370px;
    height: 100%;
    background: var(--bright);
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const Modal = styled.div`
  background-color: var(--contrast);
  border-radius: 40px;
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
  margin: "40px 0",
};

export const google_btn = {
  background: "var(--bacGrad)",
};
