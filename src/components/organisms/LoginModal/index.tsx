import { Button, Checkbox, GoogleButton, Input } from "@/components";
import { authService } from "@/connection";
import { showToast } from "@/providers";
import { LoginData, LoginError } from "@/types";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divisor, Modal, Remember, login_btn, signin_btn } from "./styles";

type LoginModalProps = {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginModal({ setShowLoginModal }: LoginModalProps) {
  const initialCredentials = { email: "", password: "" };
  const [credentials, setCredentials] = useState<LoginData>(initialCredentials);
  const [user, setUser] = useLocalStorage("user");
  const [error, setError] = useState<LoginError>({
    email: false,
    password: false,
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
      .then((response) => {
        setUser(response.user);
      })
      .catch(() => {
        setCredentials(initialCredentials);
        showToast("Usuário ou senha inválido");
      })
      .finally(() => setLoading(false));
  };

  const validateFields = () => {
    const { email, password } = credentials;

    if (email === "" || password === "") {
      setError((prevError) => ({ ...prevError, user: email === "", password: password === "" }));
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (user) navigate("/home");
  }, [user]);

  return (
    <Modal onSubmit={handleLogin} autoComplete="off">
      <div className="title">
        <h1>Eae blz? 👋</h1>
        <p>Bota suas informações de login aqui embaixo pra entrar.</p>
      </div>
      <Input
        value={credentials.email}
        placeholder="Seu email"
        onChange={handleChange}
        name="email"
        autoFocus
        inputError={error.email}
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
      <Button style={signin_btn} text="Criar uma conta" onClick={() => setShowLoginModal(false)} />
      <Divisor title="divisor" className="flex_ccr">
        <div className="line" />
        <span>ou</span>
        <div className="line" />
      </Divisor>
      <GoogleButton />
    </Modal>
  );
}
