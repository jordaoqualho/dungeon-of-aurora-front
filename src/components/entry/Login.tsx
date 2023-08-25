import { google_logo } from "@/assets";
import authService from "@/connection/authService";
import { showToast } from "@/providers";
import { ApiResponse, LoginData, LoginError } from "@/types";
import { parseJwt } from "@/utils/jwtParser";
import { TokenResponse, useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import Checkbox from "../common/Checkbox";
import Input from "../common/Input";
import { Divisor, Modal, Remember, google_btn, login_btn, signin_btn } from "./Sign.styles";

type LoginProps = {
  setSignShow: (value: string) => void;
  style: CSSProperties | undefined;
};

export default function Login({ style, setSignShow }: LoginProps) {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
    setError((prevError) => ({ ...prevError, [name]: value === "" }));
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse: TokenResponse) => {
      showToast("Você está logado!", "success");
      getGoogleProfile(tokenResponse.access_token);
      navigate("/home");
    },
    onError: () => {
      showToast("Login com google falhou");
    },
  });

  const getGoogleProfile = (access_token: string) => {
    console.log(access_token);
    const url = `${access_token}`;
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((error: ApiResponse) => showToast(error.message));
  };

  useGoogleOneTapLogin({
    onSuccess: (response) => {
      console.log(parseJwt(response.credential));
      showToast("Você está logado!", "success");
      navigate("/home");
    },
    onError: () => {
      showToast("Login com google falhou");
    },
  });

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
        <a href="">Esqueceu a senha?</a>
      </Remember>
      <Button style={login_btn} type="submit" text="Entrar" loading={loading} />
      <Button style={signin_btn} text="Criar uma conta" onClick={() => setSignShow("SignUp")} />
      <Divisor title="divisor" className="flex_ccr">
        <div className="line" />
        <span>ou</span>
        <div className="line" />
      </Divisor>
      <Button
        icon={{ src: google_logo, alt: "google_logo" }}
        onClick={() => googleLogin()}
        text="Entrar com Google"
        style={google_btn}
      />
    </Modal>
  );
}
