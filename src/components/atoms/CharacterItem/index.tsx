/* eslint-disable @typescript-eslint/no-misused-promises */
import { male_character } from "@/assets";
import { defaultCharacter } from "@/constants";
import { Character } from "@/types";
import { useLocalStorage } from "usehooks-ts";
import { Container, NameAndInfo, PhotoAndLevel } from "./styles";

type CharacterItemProps = {
  character: Character;
  closeAll: () => void;
  setShowPictureModal: (value: boolean) => void;
  setShowRaceSelector: (value: boolean) => void;
  setShowClassSelector: (value: boolean) => void;
  setShowLevelSelector: (value: boolean) => void;
};

export function CharacterItem(props: CharacterItemProps) {
  const { character, closeAll } = props;
  const [, setStorageCharacter] = useLocalStorage<Character>(
    "character",
    defaultCharacter
  );

  const changeSelectedCharacter = () => {
    setStorageCharacter(character);
    closeAll();
  };

  return (
    <Container className="flex_csr" onClick={() => changeSelectedCharacter()}>
      <PhotoAndLevel className="flex_ccr">
        <img
          className={`photo`}
          src={character?.picture || male_character}
          alt="photo"
        />
        <div className="level flex_ccr">
          <p>{character.level}</p>
        </div>
      </PhotoAndLevel>
      <NameAndInfo className="flex_scc">
        <p className="name">{character.name || "Sem Nome"}</p>
        <div className="info flex_ccr">
          <p className="race">{character.race || "Raça"}</p>
          <p>/</p>
          <p className="class">{character.class || "Classe"}</p>
        </div>
      </NameAndInfo>
    </Container>
  );
}
