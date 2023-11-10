import { google_logo } from "@/assets";
import { Button } from "@/components";
import { userService } from "@/connection";
import { showToast } from "@/providers";
import { ApiResponse, GoogleResponse, User } from "@/types";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function GoogleButton() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage<User>("user");

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
      .get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`)
      .then(async (response: GoogleResponse) => await handleUserLogin(response.data.email, response))
      .catch((error: ApiResponse) => showToast(error.message));
  };

  const handleUserLogin = async (email: string, response: GoogleResponse) => {
    const foundUser = await userService.getByEmail(email);
    if (foundUser) {
      setUser(foundUser);
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
    };

    await userService
      .post(formatedUser)
      .then((response) => setUser(response))
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

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

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
