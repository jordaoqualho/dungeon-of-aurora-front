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

export const Form = styled.div`
  gap: 10px;

  img {
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

  button {
    font-size: var(--medium);
    color: var(--background);
    border-radius: 15px;
    font-weight: 600;
    padding: 20px;
    width: 100%;

    &:focus {
      opacity: 0.75;
    }
  }

  .remember {
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
  }

  .login_btn {
    background-color: var(--primary);
    background: linear-gradient(0deg, rgba(135, 78, 254, 0.56) 0%, rgba(135, 78, 254, 0.86) 50%, #874efe 100%);
    margin: 40px 0;
    color: var(--basic);
  }

  .divisor {
    span {
      color: var(--bright);
    }
    .line {
      width: 200px;
      height: 2px;
      background-color: var(--border);
    }
  }

  .google {
    background: linear-gradient(180deg, rgba(54, 57, 70, 0.86) 0%, #2d2f38 51.04%, #262834 100%);
    color: var(--basic);
  }
`;
