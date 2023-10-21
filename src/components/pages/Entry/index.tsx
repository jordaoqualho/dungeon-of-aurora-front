import castle from "@/assets/images/castle.png";
import { Login, SignUp, TiltBox } from "@/components";
import { useState } from "react";
import { Container } from "./styles";

export function Entry() {
  const [showEntry, setShowEntry] = useState("Login");

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <Container title="container">
      <div className="w100 hfs flex_ccc">
        <div className="flex_ssr">
          <Login
            setShowEntry={(value: string) => setShowEntry(value)}
            style={{ display: showEntry === "Login" ? "block" : "none" }}
          />
          <SignUp
            style={{ display: showEntry === "SignUp" ? "block" : "none" }}
            setShowEntry={(value: string) => setShowEntry(value)}
          />
          <TiltBox>
            <img className="castle_img" src={castle} alt="castle" />
          </TiltBox>
        </div>
      </div>
    </Container>
  );
}
