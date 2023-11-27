import { google_logo } from "@/assets";
import { Button } from "@/components";
import { characterService, userService } from "@/connection";
import { showToast } from "@/providers";
import { ApiResponse, GoogleResponse, User, defaultUser } from "@/types";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

export function GoogleButton() {
  const navigate = useNavigate();
  const [, setUser] = useLocalStorage<User>("user", defaultUser);

  const failedLogin = () => {
    showToast("Login com google falhou");
  };

  const googleButtonLogin = useGoogleLogin({
    onSuccess: (tokenResponse: TokenResponse) => {
      getGoogleProfile(tokenResponse.access_token);
    },
    onError: failedLogin,
  });

  const getGoogleProfile = (access_token: string) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
      )
      .then(
        async (response: GoogleResponse) =>
          await handleUserLogin(response.data.email, response)
      )
      .catch((error: ApiResponse) => showToast(error.message));
  };

  const handleUserLogin = async (email: string, response: GoogleResponse) => {
    const foundUser = await userService.getByEmail(email);
    if (foundUser) {
      setUser({ ...foundUser, isAuthenticated: true });
      navigate("/character");
    } else {
      await createUser(response);
    }
  };

  const createUser = async (userData: GoogleResponse) => {
    const { email, name, picture } = userData.data;
    const formatedUser: User = {
      email,
      name,
      avatarUrl: picture,
      password: email,
      isAuthenticated: true,
    };

    await userService
      .post(formatedUser)
      .then(async (response) => {
        setUser({ ...response, isAuthenticated: true });
        await characterService.post({
          userId: response?._id,
        });
        showToast(`Bem vindo ${response.name}`, "success");
        navigate("/character");
      })
      .catch((error) => console.log(error));
  };

  // useGoogleOneTapLogin({
  //   onSuccess: (response) => {
  //     const credentials = parseJwt(response.credential) as GoogleCredentials;
  //     console.log(credentials);
  //     // successLogin();
  //   },
  //   onError: failedLogin,
  // });

  return (
    <Button
      icon={{ src: google_logo, alt: "google_logo" }}
      onClick={() => googleButtonLogin()}
      text="Entrar com Google"
      style={{
        background: "var(--basic)",
        color: "var(--background)",
      }}
    />
  );
}
