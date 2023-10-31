import { Button, Checkbox, GoogleButton, Input } from "@/components";
import { LoginData, SignUpData, SignUpError } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Divisor, Modal, Remember, login_btn, signin_btn } from "./styles";

export function Welcome() {
  const initialCredentials = { user: "", password: "" };
  const [credentials, setCredentials] = useState<LoginData>(initialCredentials);
  const [error, setError] = useState<SignUpError>({
    user: false,
    password: false,
    passwordRepeat: false,
    email: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
    setError((prevError) => ({ ...prevError, [name]: value === "" }));
  };

  return (
    <Container className="w100 hfs flex_ccc">
      <Modal>
        <div className="title">
          <h1>Eae blz? 👋</h1>
          <p>Bota suas informações de login aqui embaixo pra entrar.</p>
        </div>
        <Input
          value={credentials.user}
          placeholder="Seu usuário"
          onChange={handleChange}
          name="user"
          autoFocus
          inputError={error.user}
        />
        <Input
          value={credentials.password}
          type="password"
          placeholder="Sua senha"
          onChange={handleChange}
          name="password"
          inputError={error.password}
        />
        <Remember title="remember" className="flex_sbr">
          <div className="check-box  flex_ssr">
            <Checkbox />
            <label htmlFor="">Continuar conectado</label>
          </div>
          <a href="#">Esqueceu a senha?</a>
        </Remember>
        <Button style={login_btn} type="submit" text="Entrar" loading={loading} />
        <Button style={signin_btn} text="Criar uma conta" onClick={() => console.log("SignUp")} />
        <Divisor title="divisor" className="flex_ccr">
          <div className="line" />
          <span>ou</span>
          <div className="line" />
        </Divisor>
        <GoogleButton />
      </Modal>
    </Container>
  );
}
