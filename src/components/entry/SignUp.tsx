import { showToast } from "@/providers";
import { ApiResponse, SignUpData, SignUpError } from "@/types";
import { parseJwt } from "@/utils/jwtParser";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import Input from "../common/Input";
import { Modal, signin_btn, login_btn } from "./Sign.styles";

type SignUpProps = {
  style?: CSSProperties | undefined;
  setShowEntry: (value: string) => void;
};

export default function SignUp({ style, setShowEntry }: SignUpProps) {
  const [signUpData, setSignUpData] = useState<SignUpData>({ user: "", password: "", passwordRepeat: "", email: "" });
  const [error, setError] = useState<SignUpError>({
    user: false,
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

    validadeSignUpInfo()
      .then((res: ApiResponse) => {
        showToast(res.message, "success");
        navigate("/home");
      })
      .catch((error) => {
        showToast((error as Error).message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validateFields = () => {
    const { user, password, email, passwordRepeat } = signUpData;
    const invalidFields = user === "" || password === "" || email === "" || passwordRepeat === "";
    const diferentPassword = password !== passwordRepeat;

    setError((prevError) => ({
      ...prevError,
      user: user === "",
      password: password === "",
      email: email === "",
      passwordRepeat: passwordRepeat === "" || diferentPassword,
    }));

    return !invalidFields && !diferentPassword;
  };

  const validadeSignUpInfo = async (): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true, message: "Deu bom, conta criada!" });
        reject({ success: false, message: "Não deu bom, tenta denovo" });
      }, 1000);
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
    setError((prevError) => ({ ...prevError, [name]: value === "" }));
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
    <Modal title="modal" onSubmit={handleSignUp} style={style} autoComplete="off">
      <div className="title">
        <h1>Bem-vindo 🎉</h1>
        <p>Bota suas informações aqui embaixo pra criar uma nova conta.</p>
      </div>
      <Input
        placeholder="Qual seu nome?"
        value={signUpData.user}
        onChange={handleChange}
        name="user"
        autoFocus
        inputError={error.user}
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
        value={signUpData.password}
        placeholder="Repete a senha pra não esquecer"
        onChange={handleChange}
        name="passwordRepeat"
        inputError={error.passwordRepeat}
      />
      <Button style={login_btn} type="submit" text="Criar conta" loading={loading} />
      <Button onClick={() => setShowEntry("Login")} text="Já tenho uma conta" style={signin_btn} />
    </Modal>
  );
}
