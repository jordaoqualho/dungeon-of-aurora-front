import { ClassCharacteristics } from "@/components/molecules";
import { classService } from "@/connection";
import { Character, Class } from "@/types";
import { useEffect, useState } from "react";

type CharacteristicsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  activeMenu: string;
};

export function Characteristics(props: CharacteristicsProps) {
  const { activeMenu, character, setCharacter } = props;
  const [charClass, setCharClass] = useState<Class>();

  useEffect(() => {
    classService
      .search(character.class)
      .then((response) => {
        setCharClass(response[0]);
        console.log(response[0]);
      })
      .catch((error) => console.error(error));
  }, [character]);

  if (activeMenu !== "Characteristics") return <></>;

  return (
    <>
      <ClassCharacteristics
        character={character}
        setCharacter={setCharacter}
        title={charClass?.name || "Classe"}
        charClass={charClass}
      />
    </>
  );
}
