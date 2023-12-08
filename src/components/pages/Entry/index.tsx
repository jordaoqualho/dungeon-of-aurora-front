import { Welcome } from "@/components/templates/Welcome";
import { User } from "@/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";
import { Container } from "./styles";

export function Entry() {
  const user = useReadLocalStorage<User>("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isAuthenticated) {
      return navigate("/character");
    }
  }, []);

  return (
    <Container title="container">
      {/* <img src={giphy} alt="landscape" className="landscape" /> */}
      <Welcome />
      <p className="version">Versão {APP_VERSION}</p>
    </Container>
  );
}
