import { Attributes, Capabilities, HitPoints, Proficiency } from "@/components";
import { Character } from "@/types";

type AbilitiesProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function Abilities(props: AbilitiesProps) {
  const { character, setCharacter, isEditing, activeMenu } = props;

  if (activeMenu !== "Abilities") return <></>;

  return (
    <>
      <HitPoints
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
      />

      <Capabilities
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
      />

      <Attributes
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
      />

      <Proficiency
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
      />
    </>
  );
}
