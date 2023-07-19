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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type LoginData = {
  user: string;
  password: string;
};

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({ user: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await validadeLogin()
      .then((res: any) => {
        toast(res.message, { type: "success" });
        navigate("/home");
      })
      .catch((error) =>
        toast(error.message, {
          type: "error",
        })
      );
  };

  const validadeLogin = async () => {
    const { user, password } = loginData;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "admin" && password === "admin") resolve({ success: true, message: "Successfully authenticated" });
        reject({ success: false, message: "Invalid login info" });
      }, 1000);
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <Container title="container">
      <div className="w100 hfs flex_ccc">
        <Form title="form" className="flex_ssr" onSubmit={handleLogin}>
          <Modal title="modal">
            <div className="title">
              <h1>Eae blz? 👋</h1>
              <p>Bota suas informação de login aqui embaixo pra entrar.</p>
            </div>
            <Input placeholder="Seu usuário" onChange={handleChange} name="user" autoFocus />
            <Input type="password" placeholder="Sua senha" onChange={handleChange} name="password" />
            <Remember title="remember" className="flex_sbr">
              <div className="check-box  flex_ssr">
                <Checkbox />
                <label htmlFor="">Continuar conectado</label>
              </div>
              <a href="">Esqueceu a senha?</a>
            </Remember>
            <Button style={login_btn} type="submit" text="Entrar" />
            <Button
              style={signin_btn}
              text="Criar uma conta"
              onClick={() => toast("Cadastro indisponível", { type: "error" })}
            />
            <Divisor title="divisor" className="flex_ccr">
              <div className="line" />
              <span>ou</span>
              <div className="line" />
            </Divisor>
            <Button
              icon={{ src: google_logo, alt: "google_logo" }}
              text="Entrar com Google"
              style={google_btn}
              type="submit"
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
