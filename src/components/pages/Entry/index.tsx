import { giphy } from "@/assets";
import { Welcome } from "@/components/organisms/Welcome";
import { Container } from "./styles";

export function Entry() {
  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <Container title="container">
      <img src={giphy} alt="landscape" className="landscape" />
      <Welcome />
    </Container>
  );
}
