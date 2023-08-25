import castle from "@/assets/images/castle.png";
import TiltBox from "@/components/common/TiltBox";
import Login from "@/components/entry/Login";
import SignUp from "@/components/entry/SignUp";
import { Container } from "@/pages/entry/Entry.styles";
import { useState } from "react";

export default function Entry() {
  const [signShow, setSignShow] = useState("signIn");

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <Container title="container">
      <div className="w100 hfs flex_ccc">
        <div className="flex_ssr">
          <Login
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