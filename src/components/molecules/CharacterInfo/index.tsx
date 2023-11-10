import { male_character } from "@/assets";
import { ClassSelector, RaceSelector } from "@/components";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const CharacterInfo = () => {
  const [user, setUser] = useLocalStorage("user");
  const [showRaceSelector, setShowRaceSelector] = useState(false);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const [character, setCharacter] = useState({
    race: "",
    class: "",
    level: 3,
  });
  const navigate = useNavigate();

  const handleExit = () => {
    if (user) {
      setUser(null);
    }
    navigate("/");
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
        <input className="name" placeholder="Nome do Personagem" />
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
