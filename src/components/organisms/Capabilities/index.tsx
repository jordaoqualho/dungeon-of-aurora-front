import { Capability } from "@/components";
import { Character } from "@/types";
import { getAbilityModifier, getProficiencyBonus } from "@/utils";
import { ChangeEvent } from "react";
import { Container } from "./styles";

type CapabilitiesProps = {
  character: Character;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export const Capabilities = (props: CapabilitiesProps) => {
  const { character, setCharacter, isEditing } = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  return (
    <Container className="flex_ccr">
      <Capability
        label={"Proficiência"}
        inputValue={getProficiencyBonus(character.level)}
        isEditing={isEditing}
      />
      <Capability
        label={"CA"}
        inputName={"armorClass"}
        hexagonBorder
        inputValue={character.armorClass}
        onChange={handleInputChange}
        readOnly={!isEditing}
        isEditing={isEditing}
      />
      <Capability
        label={"Iniciativa"}
        inputValue={getAbilityModifier(character.attributes.dexterity)}
        onChange={handleInputChange}
        isEditing={isEditing}
      />
      <Capability
        label={"Desloc."}
        inputName={"speed"}
        inputValue={character.speed}
        onChange={handleInputChange}
        readOnly={!isEditing}
        isEditing={isEditing}
      />
    </Container>
  );
};
