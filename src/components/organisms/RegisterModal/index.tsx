import { Button, Input } from "@/components";
import { userService } from "@/connection";
import { showToast } from "@/providers";
import { SignUpData, SignUpError, User, defaultUser } from "@/types";
import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { Modal, login_btn, signin_btn } from "./styles";

type RegisterModalProps = {
  style?: CSSProperties | undefined;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RegisterModal({
  setShowLoginModal,
}: RegisterModalProps) {
  const initialCredentials = {
    name: "",
    password: "",
    passwordRepeat: "",
    email: "",
  };
  const [signUpData, setSignUpData] = useState<SignUpData>(initialCredentials);
  const [user, setUser] = useLocalStorage<User>("user", defaultUser);
  const [error, setError] = useState<SignUpError>({
    name: false,
    password: false,
    passwordRepeat: false,
    email: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return showToast("Já está carregando");
    if (!validateFields()) return showToast("Preencha todos os campos!");
    setLoading(true);
    registerUser();
  };

  const registerUser = () => {
    userService
      .post(signUpData)
      .then((createdUser: User) => {
        setUser({ ...createdUser, isAuthenticated: true });
        // TODO: Create character on register
        successRegister();
      })
      .catch((error) => {
        console.log("📌  registerUser Error → ", error);
        showToast("Usuário ou senha inválido");
      })
      .finally(() => setLoading(false));
  };

  const successRegister = () => {
    showToast(`Bem vindo ${user.name}`, "success");
    navigate("/home");
  };

  const validateFields = () => {
    const { name, password, email, passwordRepeat } = signUpData;
    const invalidFields =
      name === "" || password === "" || email === "" || passwordRepeat === "";
    const diferentPassword = password !== passwordRepeat;

    setError((prevError) => ({
      ...prevError,
      name: name === "",
      password: password === "",
      email: email === "",
      passwordRepeat: passwordRepeat === "" || diferentPassword,
    }));

    return !invalidFields && !diferentPassword;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
    setError((prevError) => ({ ...prevError, [name]: value === "" }));
  };

  return (
    <Modal title="modal" onSubmit={handleSignUp} autoComplete="off">
      <div className="title">
        <h1>Bem-vindo 🎉</h1>
        <p>Bota suas informações aqui embaixo pra criar uma nova conta.</p>
      </div>
      <Input
        placeholder="Qual seu nome?"
        value={signUpData.name}
        onChange={handleChange}
        name="name"
        autoFocus
        inputError={error.name}
      />
      <Input
        placeholder="Qual email tu usa?"
        value={signUpData.email}
        onChange={handleChange}
        name="email"
        inputError={error.email}
      />
      <Input
        type="password"
        value={signUpData.password}
        placeholder="Bota uma senha forte"
        onChange={handleChange}
        name="password"
        inputError={error.password}
      />
      <Input
        type="password"
        value={signUpData.passwordRepeat}
        placeholder="Repete a senha"
        onChange={handleChange}
        name="passwordRepeat"
        inputError={error.passwordRepeat}
      />
      <Button
        style={login_btn}
        type="submit"
        text="Criar conta"
        loading={loading}
      />
      <Button
        onClick={() => setShowLoginModal(true)}
        text="Já tenho uma conta"
        style={signin_btn}
      />
    </Modal>
  );
}
