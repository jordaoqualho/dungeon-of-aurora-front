import { Button, Checkbox, GoogleButton, Input } from "@/components";
import authService from "@/connection/authService";
import { showToast } from "@/providers";
import { LoginData, LoginError } from "@/types";
import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divisor, Modal, Remember, login_btn, signin_btn } from "../SignUp/styles";

type LoginProps = {
  setShowEntry: (value: string) => void;
  style: CSSProperties | undefined;
};

export function Login({ style, setShowEntry }: LoginProps) {
  const initialCredentials = { user: "", password: "" };
  const [credentials, setCredentials] = useState<LoginData>(initialCredentials);
  const [error, setError] = useState<LoginError>({ user: false, password: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return showToast("Já esta carregando");
    if (!validateFields()) return showToast("Preencha todos os campos!");
    setLoading(true);
    authLogin();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
    setError((prevError) => ({ ...prevError, [name]: value === "" }));
  };

  const authLogin = () => {
    authService
      .login(credentials)
      .then(() => {
        showToast("Você está logado!", "success");
        navigate("/home");
      })
      .catch(() => {
        setCredentials(initialCredentials);
        showToast("Usuário ou senha inválido");
      })
      .finally(() => setLoading(false));
  };

  const validateFields = () => {
    const { user, password } = credentials;

    if (user === "" || password === "") {
      setError((prevError) => ({ ...prevError, user: user === "", password: password === "" }));
      return false;
    }

    return true;
  };

  return (
    <Modal title="modal" onSubmit={handleLogin} style={{ ...style }}>
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
      <Button style={signin_btn} text="Criar uma conta" onClick={() => setShowEntry("SignUp")} />
      <Divisor title="divisor" className="flex_ccr">
        <div className="line" />
        <span>ou</span>
        <div className="line" />
      </Divisor>
      <GoogleButton />
    </Modal>
  );
}
