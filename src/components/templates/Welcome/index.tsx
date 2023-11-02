import LoginModal from "@/components/organisms/LoginModal";
import RegisterModal from "@/components/organisms/RegisterModal";
import { useState } from "react";

export function Welcome() {
  const [showLoginModal, setShowLoginModal] = useState(true);

  return (
    <div className="w100 hfs flex_ccc">
      {showLoginModal ? (
        <LoginModal setShowLoginModal={setShowLoginModal} />
      ) : (
        <RegisterModal setShowLoginModal={setShowLoginModal} />
      )}
    </div>
  );
}
