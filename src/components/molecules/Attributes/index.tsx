import { Attribute } from "@/components";
import { Character } from "@/types";
import { ChangeEvent } from "react";
import { Container } from "./styles";

type AttributesProps = {
  character: Character;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export const Attributes = (props: AttributesProps) => {
  const { character, setCharacter, isEditing } = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCharacter({
      ...character,
      attributes: {
        ...character.attributes,
        [name]: value,
      },
    });
  };

  return (
    <Container className="flex_ccr">
      <div className="title">Atributos</div>
      <Attribute
        label="Força"
        name="strength"
        value={character.attributes.strength}
        handeChange={handleInputChange}
        isEditing={isEditing}
      />
      <Attribute
        label="Destreza"
        name="dexterity"
        value={character.attributes.dexterity}
        handeChange={handleInputChange}
        isEditing={isEditing}
      />
      <Attribute
        label="Constituição"
        name="constitution"
        value={character.attributes.constitution}
        handeChange={handleInputChange}
        isEditing={isEditing}
      />
      <Attribute
        label="Inteligência"
        name="intelligence"
        value={character.attributes.intelligence}
        handeChange={handleInputChange}
        isEditing={isEditing}
      />
      <Attribute
        label="Sabedoria"
        name="wisdom"
        value={character.attributes.wisdom}
        handeChange={handleInputChange}
        isEditing={isEditing}
      />
      <Attribute
        label="Carisma"
        name="charisma"
        value={character.attributes.charisma}
        handeChange={handleInputChange}
        isEditing={isEditing}
      />
    </Container>
  );
};
