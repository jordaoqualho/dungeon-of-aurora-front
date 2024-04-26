import { Capability } from "@/components";
import { showToast } from "@/providers";
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
    const formatedValue = parseInt(value) || 0;
    const inputValue = formatedValue > 99 ? 99 : formatedValue;

    if (formatedValue > 99) showToast("Valor máximo atingido", "warning");

    if (name === "armorClass") {
      setCharacter({ ...character, armorClass: { value: inputValue } });
    } else {
      setCharacter({ ...character, [name]: inputValue });
    }
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
        inputValue={character.armorClass.value}
        onChange={handleInputChange}
        isEditing={isEditing}
        readOnly={!isEditing}
      />

      <Capability
        label={"Iniciativa"}
        inputValue={getAbilityModifier(character.attributes.dexterity)}
        isEditing={isEditing}
      />

      <Capability
        label={"Desloc."}
        inputName={"speed"}
        inputValue={character.speed}
        onChange={handleInputChange}
        isEditing={isEditing}
        readOnly={!isEditing}
      />
    </Container>
  );
};
