import { Attributes, Capabilities, CharacterInfo, Menu } from "@/components";
import { Proficiency } from "@/components/molecules/Proficiency";
import { Container } from "./styles";

export function Home() {
  return (
    <Container className="flex_ccc">
      <CharacterInfo />
      <Menu />
      <Capabilities />
      <Attributes />
      <Proficiency />
    </Container>
  );
}
