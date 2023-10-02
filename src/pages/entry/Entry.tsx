import castle from "@/assets/images/castle.png";
import TiltBox from "@/components/common/TiltBox";
import Login from "@/components/entry/Login";
import SignUp from "@/components/entry/SignUp";
import { Container } from "@/pages/entry/Entry.styles";
import { useState } from "react";

export default function Entry() {
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
