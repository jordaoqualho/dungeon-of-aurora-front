import { google_logo } from "@/assets";
import castle from "@/assets/images/castle.png";
import { Button } from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import TiltBox from "@/components/common/TiltBox";
import {
  Container,
  Divisor,
  Form,
  Modal,
  Remember,
  google_btn,
  login_btn,
  signin_btn,
} from "@/pages/login/Login.styles";
import { showToast } from "@/providers/toasterProvider";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginData = {
  user: string;
  password: string;
};

type LoginError = {
  user: boolean;
  password: boolean;
};

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({ user: "", password: "" });
  const [error, setError] = useState<LoginError>({ user: false, password: false });
  // const [profile, setProfile] = useLocalStorage("userProfile");
  // const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return showToast("Já esta carregando");
    if (!validateFields()) return showToast("Preencha todos os campos!");
    setLoading(true);
    await validadeLogin()
      .then((res: any) => {
        showToast(res.message, "success");
        navigate("/home");
      })
      .catch((error) => showToast(error.message))
      .finally(() => setLoading(false));
  };

  const validateFields = () => {
    const { user, password } = loginData;

    if (user === "" || password === "") {
      setError((prevError) => ({ ...prevError, user: user === "", password: password === "" }));
      return false;
    }

    return true;
  };

  const validadeLogin = async () => {
    const { user, password } = loginData;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "admin" && password === "admin") resolve({ success: true, message: "Você está logado!" });
        reject({ success: false, message: "Usuário ou senha inválido" });
      }, 1000);
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setError((prevError) => ({ ...prevError, [name]: value === "" }));
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getGoogleProfile(tokenResponse.access_token);
      showToast("Você está logado!", "success");
      navigate("/home");
    },
    onError: () => {
      showToast("Login com google falhou");
    },
  });

  const getGoogleProfile = async (access_token: string) => {
    console.log(access_token);

    const url = `${access_token}`;
    await axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((error) => showToast(error));
  };

  function parseJwt(token: string | undefined) {
    if (!token) return "";
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

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

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <Container title="container">
      <div className="w100 hfs flex_ccc">
        <Form title="form" className="flex_ssr" onSubmit={handleLogin}>
          <Modal title="modal">
            <div className="title">
              <h1>Eae blz? 👋</h1>
              <p>Bota suas informação de login aqui embaixo pra entrar.</p>
            </div>
            <Input placeholder="Seu usuário" onChange={handleChange} name="user" autoFocus inputError={error.user} />
            <Input
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
            <Button
              style={signin_btn}
              text="Criar uma conta"
              onClick={() => showToast("Cadastro indisponível", "warning")}
            />
            <Divisor title="divisor" className="flex_ccr">
              <div className="line" />
              <span>ou</span>
              <div className="line" />
            </Divisor>
            <Button
              icon={{ src: google_logo, alt: "google_logo" }}
              onClick={() => loginWithGoogle()}
              text="Entrar com Google"
              style={google_btn}
            />
          </Modal>
          <TiltBox>
            <img className="castle_img" src={castle} alt="castle" />
          </TiltBox>
        </Form>
      </div>
    </Container>
  );
}
