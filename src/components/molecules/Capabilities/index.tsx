import { Character } from "@/types";
import { calculateAbilityModifier, calculateProficiencyBonus } from "@/utils";
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
      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input
            type="text"
            value={calculateProficiencyBonus(character.level)}
            readOnly
          />
        </div>
        <p>Proficiência</p>
      </div>
      <div className="capability flex_csr">
        <div className={`mod flex_ccc ${isEditing ? "editing" : ""}`}>
          <input
            type="text"
            name="armorClass"
            value={character.armorClass}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <p>Armadura</p>
      </div>
      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input
            type="text"
            value={calculateAbilityModifier(character.attributes.dexterity)}
            readOnly
          />
        </div>
        <p>Iniciativa</p>
      </div>
      <div className="capability flex_csr">
        <div className={`mod flex_ccc ${isEditing ? "editing" : ""}`}>
          <input
            type="text"
            name="speed"
            value={character.speed}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <p>Descolamento</p>
      </div>
    </Container>
  );
};
