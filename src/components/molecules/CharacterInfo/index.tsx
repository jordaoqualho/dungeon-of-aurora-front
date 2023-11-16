import { male_character } from "@/assets";
import { ClassSelector, RaceSelector } from "@/components";
import { Character, User, defaultUser } from "@/types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { Container } from "./styles";

type CharacterInfoProps = {
  character: Character;
  setCharacter: (char: Character) => void;
};

export const CharacterInfo = (props: CharacterInfoProps) => {
  const [user, setUser] = useLocalStorage<User>("user", defaultUser);
  const [showRaceSelector, setShowRaceSelector] = useState(false);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const { character, setCharacter } = props;
  const navigate = useNavigate();

  const handleExit = () => {
    if (user) {
      setUser(null as unknown as User);
    }
    navigate("/");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  return (
    <Container className="flex_csr">
      <section className="photo_level flex_ccr">
        <img className="photo" src={male_character} alt="" onClick={() => handleExit()} />
        <div className="level flex_ccr">
          <p>{character.level}</p>
        </div>
      </section>
      <section className="name_info flex_scc">
        <input
          className="name"
          name="name"
          value={character.name}
          placeholder="Nome do Personagem"
          onChange={handleInputChange}
        />
        <div className="info flex_ccr">
          <button className="race" onClick={() => setShowRaceSelector(!showRaceSelector)}>
            {character.race || "Raça"}
          </button>
          <p>/</p>
          <button className="class" onClick={() => setShowClassSelector(!showClassSelector)}>
            {character.class || "Classe"}
          </button>
        </div>
      </section>
      <RaceSelector
        isOpen={showRaceSelector}
        setSelection={(value: string) => {
          setCharacter({ ...character, race: value });
          setShowRaceSelector(false);
        }}
      />
      <ClassSelector
        isOpen={showClassSelector}
        setSelection={(value: string) => {
          setCharacter({ ...character, class: value });
          setShowClassSelector(false);
        }}
      />
    </Container>
  );
};
