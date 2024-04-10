/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  d10_dice_dark_icon,
  d10_dice_icon,
  d12_dice_dark_icon,
  d12_dice_icon,
  d6_dice_dark_icon,
  d6_dice_icon,
  d8_dice_dark_icon,
  d8_dice_icon,
  damage_icon,
  healing_icon,
  sleep_icon,
} from "@/assets";
import { useActionContext } from "@/contexts";
import { showToast } from "@/providers";
import { Character } from "@/types";
import { getAbilityModifier, rollDice } from "@/utils";
import { ChangeEvent, useState } from "react";
import { DamageAndHealingModal } from "../DamageAndHealingModal";
import { Container } from "./styles";

type HitPointsProps = {
  character: Character;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export const HitPoints = (props: HitPointsProps) => {
  const { character, setCharacter, isEditing } = props;
  const lifeDices = new Array(character.level || 1).fill(0);
  const [damageAndHealingModal, setDamageAndHealingModal] = useState("closed");
  const actionContext = useActionContext();

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

      if (name === "maxHitPoints" && numberValue < character.hitPoints) {
        updatedCharacter.hitPoints = numberValue;
      }

      setCharacter(updatedCharacter);
    } else {
      showToast("Pontos de vida inválidos", "warning");
    }
  };

  const handleHitPointDice = () => {
    const { hitPoints, maxHitPoints, hitPointDices } = character;

    if (hitPoints === maxHitPoints) {
      showToast("Você já está com vida máxima", "warning");
      return;
    }

    if (hitPointDices.quantity <= 0) {
      showToast("Sem dados de vida disponível", "warning");
      return;
    }

    const constitutionMod = parseInt(
      getAbilityModifier(character.attributes.constitution)
    );
    const lifeDiceRoll = rollDice(hitPointDices.dice).total + constitutionMod;
    const healedHitPoints = hitPoints + lifeDiceRoll;
    const updatedHitPoints = Math.min(healedHitPoints, maxHitPoints);

    showToast(`Você recuperou ${lifeDiceRoll} de vida`, "success");

    const newCharacterData = {
      ...character,
      hitPoints: updatedHitPoints,
      hitPointDices: {
        ...hitPointDices,
        quantity: hitPointDices.quantity - 1,
      },
    };

    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  const getDiceIcon = (theme = "light") => {
    const { hitPointDices } = character;
    const darkIcon = theme === "dark";
    let src = "";

    if (!hitPointDices)
      return {
        alt: "hit_dice_icon",
        src: darkIcon ? d6_dice_dark_icon : d6_dice_icon,
      };

    switch (hitPointDices.dice) {
      case "d8":
        src = darkIcon ? d8_dice_dark_icon : d8_dice_icon;
        break;

      case "d10":
        src = darkIcon ? d10_dice_dark_icon : d10_dice_icon;
        break;

      case "d12":
        src = darkIcon ? d12_dice_dark_icon : d12_dice_icon;
        break;

      default:
        src = darkIcon ? d6_dice_dark_icon : d6_dice_icon;
    }

    return {
      alt: "hit_dice_icon",
      src,
    };
  };

  const isDiceUsed = (index: number) => {
    const leftDices = character.hitPointDices.quantity;
    if (index + 1 > leftDices) return true;
  };

  const restoreResources = () => {
    const { hitPointDices, maxHitPoints, level } = character;

    const spentHitDice = level - hitPointDices.quantity;
    const maxRegainedHitDice = Math.max(1, Math.floor(level / 2));
    const regainedHitDice = Math.min(maxRegainedHitDice, spentHitDice);

    const newHitPoints = maxHitPoints;
    const newHitDiceQuantity = Math.min(
      level,
      hitPointDices.quantity + regainedHitDice
    );

    const newCharacterData = {
      ...character,
      hitPoints: newHitPoints,
      hitPointDices: {
        ...hitPointDices,
        quantity: newHitDiceQuantity,
      },
    };

    showToast("Você finalizou um descanso longo", "success");

    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  return (
    <>
      <Container className="flex_ccc">
        <p className="title">PV Atual / PV Máximo</p>
        <button className="sleep_button" onClick={() => restoreResources()}>
          <img src={sleep_icon} alt="sleep_icon" />
        </button>
        <div className="points flex_csr">
          <div className="flex_ccr">
            <button
              className="damage"
              disabled={isEditing}
              onClick={() => setDamageAndHealingModal("damage")}
            >
              <img src={damage_icon} alt="damage_icon" />
            </button>
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
          <div className="max flex_ccr">
            <input
              type="text"
              name="maxHitPoints"
              className={` ${isEditing ? "editing" : ""}`}
              value={character.maxHitPoints}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
            <button
              className="healing"
              disabled={isEditing}
              onClick={() => setDamageAndHealingModal("healing")}
            >
              <img src={healing_icon} alt="healing_icon" />
            </button>
          </div>
        </div>
        <div className="life_dices flex_csb">
          <div className="info">
            <p>Dados de vida</p>
            <div className="dices flex">
              {lifeDices.map((_, index) => (
                <img
                  key={index}
                  id={index.toString()}
                  {...getDiceIcon()}
                  className={isDiceUsed(index) ? "used" : ""}
                />
              ))}
            </div>
          </div>
          <button className="flex_csr" onClick={() => handleHitPointDice()}>
            <img {...getDiceIcon("dark")} />
            <p>1{character?.hitPointDices?.dice || "d8"}</p>
          </button>
        </div>
      </Container>
      <DamageAndHealingModal
        damageAndHealingModal={damageAndHealingModal}
        setDamageAndHealingModal={setDamageAndHealingModal}
        character={character}
        setCharacter={setCharacter}
      />
    </>
  );
};
