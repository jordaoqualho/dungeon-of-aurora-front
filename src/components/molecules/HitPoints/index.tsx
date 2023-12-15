/* eslint-disable @typescript-eslint/no-misused-promises */
import { d20, d20_white } from "@/assets";
import { showPromiseToast, showToast } from "@/providers";
import { Character } from "@/types";
import { rollDice } from "@/utils";
import { ChangeEvent } from "react";
import { Container } from "./styles";

type HitPointsProps = {
  character: Character;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export const HitPoints = (props: HitPointsProps) => {
  const { character, setCharacter, isEditing } = props;
  const lifeDices = new Array(character.level || 1).fill(Math.random());

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const numberValue = parseInt(value) || 0;

    if (!isNaN(numberValue)) {
      const updatedCharacter = {
        ...character,
        [name]: value,
      };

      if (name === "hitPoints" && numberValue > character.maxHitPoints) {
        updatedCharacter.maxHitPoints = numberValue;
      }

      setCharacter(updatedCharacter);
    } else {
      showToast("Pontos de vida inválidos", "warning");
    }
  };

  const handleHitPointDice = async () => {
    const { hitPoints, maxHitPoints } = character;

    if (hitPoints === maxHitPoints) {
      showToast("Você já está com vida máxima", "warning");
      return;
    }

    const lifeDiceRoll = rollDice("d8").total;
    const healedHitPoints = hitPoints + lifeDiceRoll;
    const updatedHitPoints = Math.min(healedHitPoints, maxHitPoints);

    await showPromiseToast(`Rolou ${lifeDiceRoll} no dado de vida`, "success");
    setCharacter({
      ...character,
      hitPoints: updatedHitPoints,
    });
  };

  return (
    <Container className="flex_ccc">
      <p className="title">PV Atual / PV Máximo</p>
      <div className="points flex_csr">
        <div>
          <input
            type="text"
            name="hitPoints"
            className={` ${isEditing ? "editing" : ""}`}
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
            className={` ${isEditing ? "editing" : ""}`}
            value={character.maxHitPoints}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
      </div>
      <div className="life_dices flex_csb">
        <div className="info">
          <p>Dados de vida</p>
          <div className="dices flex">
            {lifeDices.map((_, index) => (
              <img key={index} src={d20_white} alt="d20_white" />
            ))}
          </div>
        </div>
        <button className="flex_csr" onClick={() => handleHitPointDice()}>
          <img src={d20} alt="d20" />
          <p>1d8</p>
        </button>
      </div>
    </Container>
  );
};
