import { Attributes, Capabilities, CharacterInfo, Menu } from "@/components";
import { Proficiency } from "@/components/molecules/Proficiency";
import { characterService } from "@/connection";
import { useDebounce } from "@/hooks";
import { useCharacter } from "@/hooks/useCharacter";
import { Character, User, defaultCharacter } from "@/types";
import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import { Container } from "./styles";

export function Home() {
  const [character, setCharacter] = useState<Character>(defaultCharacter);
  const user = useReadLocalStorage<User>("user");
  const { isLoading, error, data } = useCharacter(user?._id);
  
  if (error) {
    console.log(isLoading, error);
  }

  const debouncedUpdateCharacter = useDebounce((character: Character) => {
    characterService.put(character).catch((error) => console.log(error));
  }, 5000);

  useEffect(() => {
    if (!character?._id) return;
    debouncedUpdateCharacter(character);
  }, [character]);

  useEffect(() => {
    if (!data || !data[0]) return;
    setCharacter(data[0]);
  }, [data]);

  return (
    <Container className="flex_ccc">
      <CharacterInfo character={character} setCharacter={setCharacter} />
      <Menu />
      <Capabilities character={character} setCharacter={setCharacter} />
      <Attributes character={character} setCharacter={setCharacter} />
      <Proficiency character={character} setCharacter={setCharacter} />
    </Container>
  );
}
