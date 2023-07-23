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
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginData = {
  user: string;
  password: string;
};

type ErrorData = {
  user: boolean;
  password: boolean;
};

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({ user: "", password: "" });
  const [error, setError] = useState<ErrorData>({ user: false, password: false });
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

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
      // clientId: "636941607196-v894p5a30tc9r0hau15turo1hcqhvj22.apps.googleusercontent.com";
      // credential: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEzYmRiZmRlZGUzYmFiYjI2NTFhZmNhMjY3OGRkZThjMGIzNWRmNzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODk5OTg5MTEsImF1ZCI6IjYzNjk0MTYwNzE5Ni12ODk0cDVhMzB0YzlyMGhhdTE1dHVybzFoY3FodmoyMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTk4NDg5NjM1MzI3MzYzMzg1MyIsImVtYWlsIjoiam9yZGFvcXVhbGhvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI2MzY5NDE2MDcxOTYtdjg5NHA1YTMwdGM5cjBoYXUxNXR1cm8xaGNxaHZqMjIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSm9yZMOjbyBRdWFsaG8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZEk0ZXRzaVN6TkxPeUFuSUJVN1VGVHBKQ2xvMWFEZHB1ekNJaVFTSkR0X1J1eD1zOTYtYyIsImdpdmVuX25hbWUiOiJKb3Jkw6NvIiwiZmFtaWx5X25hbWUiOiJRdWFsaG8iLCJpYXQiOjE2ODk5OTkyMTEsImV4cCI6MTY5MDAwMjgxMSwianRpIjoiMDZhYmJhMjQ0MDZmZjVkNjZlNDI5M2I0MTZkOTVkNGI1MjZjZmI4YyJ9.ZMyKGpidQ4Mh8LZ8y0_kBnWceJ2eDLb2zv87Ozwj91XRf98igvntB2OaR6UesIQwTxmVnCXViOpmYBLjzhKPzJR3POtJinZheQ_TdfApuukLcxqq06kbf9Ta2FGvIn6-rjmd3c9vNIeU9Cyv0xnKxGCKBusHLMlR50C5y7O-WexowS-uggSjagm9knxsJRwZL_idvB9O5O1TaOlzHdYeDcpFIQSAadArzQXqL2V9gNlXG8MnIcGRPvZXbYYcrlxSxPogwnhsPNZvdjK0Xm_SEkFyRGv330JqcM9EU5oGYCxCc8sisN0GlvZIIvPQ_HufSv7DR7yd2H1ofPdpVH9CSQ";
      // select_by: "user_1tap";
    },
    onError: () => {
      showToast("Login com google falhou");
    },
  });

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
            <Button icon={{ src: google_logo, alt: "google_logo" }} text="Entrar com Google" style={google_btn} />
          </Modal>
          <TiltBox>
            <img className="castle_img" src={castle} alt="castle" />
          </TiltBox>
        </Form>
      </div>
    </Container>
  );
}
