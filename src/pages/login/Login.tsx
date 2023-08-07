import castle from "@/assets/images/castle.png";
import TiltBox from "@/components/common/TiltBox";
import SignIn from "@/components/login/SignIn";
import SignUp from "@/components/login/SignUp";
import { Container } from "@/pages/login/Login.styles";
import { useState } from "react";

export default function Login() {
  const [signShow, setSignShow] = useState("signIn");

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <Container title="container">
      <div className="w100 hfs flex_ccc">
        <div className="flex_ssr">
          <SignIn
            setSignShow={(value: string) => setSignShow(value)}
            style={{ display: signShow === "signIn" ? "block" : "none" }}
          />
          <SignUp style={{ display: signShow === "SignUp" ? "block" : "none" }} />
          <TiltBox>
            <img className="castle_img" src={castle} alt="castle" />
          </TiltBox>
        </div>
      </div>
    </Container>
  );
}