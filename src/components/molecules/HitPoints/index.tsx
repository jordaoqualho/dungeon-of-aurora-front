import { Character } from "@/types";
import { ChangeEvent } from "react";
import { Container } from "./styles";

type HitPointsProps = {
  character: Character;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export const HitPoints = (props: HitPointsProps) => {
  const { character, setCharacter, isEditing } = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setCharacter({
      ...character,
      [name]: value,
    });
  };

  return (
    <Container className="flex_ccr">
      <p>Pontos de vida</p>
      <div className="points flex_csr">
        <div className="actual">
          <input
            type="text"
            name="hitPoints"
            value={character.hitPoints}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <p>/</p>
        <div className="max">
          <input
            type="text"
            name="maxHitPoints"
            value={character.maxHitPoints}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
      </div>
    </Container>
  );
};
