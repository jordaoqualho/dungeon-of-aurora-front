import { google_logo } from "@/assets";
import { showToast } from "@/providers";
import { ApiResponse } from "@/types";
import { parseJwt } from "@/utils/jwtParser";
import { TokenResponse, useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { google_btn } from "./Sign.styles";

export default function GoogleButton() {
  const navigate = useNavigate();

  const successLogin = () => {
    showToast("Você está logado!", "success");
    navigate("/home");
  }

  const failedLogin = () => {
    showToast("Login com google falhou");
  }

  const googleButtonLogin = useGoogleLogin({
    onSuccess: (tokenResponse: TokenResponse) => {
      getGoogleProfile(tokenResponse.access_token);
      successLogin();
    },
    onError: failedLogin,
  });

  const getGoogleProfile = (access_token: string) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`)
      .then((res) => console.log(res.data))
      .catch((error: ApiResponse) => showToast(error.message));
  };

  useGoogleOneTapLogin({
    onSuccess: (response) => {
      console.log(parseJwt(response.credential));
      successLogin();
    },
    onError: failedLogin,
  });

  return (
    <Button
      icon={{ src: google_logo, alt: "google_logo" }}
      onClick={() => googleButtonLogin()}
      text="Entrar com Google"
      style={google_btn}
    />
  );
}
