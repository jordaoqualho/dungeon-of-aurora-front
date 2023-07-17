import castle from "../../assets/images/castle.png";
import Checkbox from "../../components/common/Checkbox";
import Input from "../../components/common/Input";
import { Container, Form, Modal } from "./Styles";

export default function Login() {
  return (
    <Container title="container">
      <div className="w100 hfs flex_ccc">
        <Form title="form" className="flex_ssr">
          <Modal title="modal">
            <div className="title">
              <h1>Faça Login</h1>
              <p>Acesse sua conta com suas informações</p>
            </div>
            <Input placeholder="Nome do usuário" />
            <Input type="password" placeholder="Senha de acesso" />
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
