import castle from "@/assets/images/castle.png";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import { Container, Form, Modal } from "@/pages/login/Styles";
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
    toast.promise(validadeLogin, {
      pending: "Promise is pending",
      success: {
        render({ data }) {
          navigate("/home");
          return `${data.message}`;
        },
      },
      error: {
        render({ data }) {
          return `${data.message}`;
        },
      },
    });

    // await validadeLogin()
    //   .then((res: any) => {
    //     toast(res.message, { type: "success" });
    //     navigate("/home");
    //   })
    //   .catch((error) =>
    //     toast(error.message, {
    //       type: "error",
    //     })
    //   );
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
              <h1>Faça Login</h1>
              <p>Acesse sua conta com suas informações</p>
            </div>
            <Input placeholder="Nome do usuário" onChange={handleChange} name="user" />
            <Input type="password" placeholder="Senha de acesso" onChange={handleChange} name="password" />
            <div className="remember flex_sbr">
              <div className="check-box  flex_ssr">
                <Checkbox />
                <label htmlFor="">Continuar conectado</label>
              </div>
              <a href="">Esqueceu a senha?</a>
            </div>
            <button className="login_btn">Login</button>
            <div className="divisor flex_ccr">
              <div className="line"></div>
              <span>ou</span>
              <div className="line"></div>
            </div>
            <button className="google">Login com google</button>
          </Modal>
          <img src={castle} alt="castle" />
        </Form>
      </div>
    </Container>
  );
}
