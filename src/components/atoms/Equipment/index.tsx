/* eslint-disable @typescript-eslint/no-misused-promises */
import { character, d20 } from "@/assets";
import { useActionContext } from "@/contexts";
import { showPromiseToast, showToast } from "@/providers";
import { Character, EquipmentType } from "@/types";
import {
  DiceType,
  getAbilityModifier,
  getEquipmentIcon,
  rollDice,
} from "@/utils";
import { useEffect, useState } from "react";
import SwipeToDelete from "react-swipe-to-delete-ios";
import { DeleteSwipe } from "..";
import {
  Container,
  EquipmentContainer,
  EquipmentHeader,
  EquipmentInfo,
} from "./styles";

type EquipmentProps = {
  equipment: EquipmentType;
  onClick: () => void;
  characterLevel: number;
  removeEquipment: (equipmentName: string) => void;
  character: Character;
  setCharacter: (value: Character) => void;
};

export function Equipment({
  equipment,
  onClick,
  removeEquipment,
  character,
  setCharacter,
}: EquipmentProps) {
  const [wasDeleted, setWasDeleted] = useState(false);
  const isEquiped = character.armorClass?.equipedArmor === equipment._id;
  const actionContext = useActionContext();

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const dice = equipment?.damage?.dice.type as DiceType;
    const quantity = equipment?.damage?.dice.quantity ?? 1;
    const totalDamage = rollDice(dice, quantity).total;

    await showPromiseToast(
      `${equipment.name} deu ${totalDamage} de dano!`,
      "success"
    );
  };

  const equipArmor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!equipment?.armorClass) return console.error("This is not an armor");

    const { attributes } = character;
    const { base, dex_bonus, max_bonus } = equipment.armorClass;

    const dexMod = parseInt(getAbilityModifier(attributes.dexterity));
    const dexBonus = Math.min(dexMod, max_bonus || 0);
    const newArmorClass = base + (dex_bonus ? dexBonus : 0);

    const newCharacterData = {
      ...character,
      armorClass: {
        value: newArmorClass,
        equipedArmor: equipment._id,
      },
    };

    showToast(`dismissAll`);
    showToast(`${equipment.name} Equipada`, "success");
    showToast(`CA atualizada para ${newArmorClass}`, "success");
    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  useEffect(() => {
    if (!wasDeleted) return;
    setTimeout(() => {
      removeEquipment(equipment._id);
    }, 500);
  }, [wasDeleted]);

  return (
    <Container $wasDeleted={wasDeleted}>
      <SwipeToDelete
        onDelete={() => setWasDeleted(true)}
        id={equipment._id}
        deleteComponent={<DeleteSwipe />}
        className="swiper"
      >
        <EquipmentContainer className="flex_csb" onClick={onClick}>
          <div className="flex_ssc" style={{ gap: 16, width: "100%" }}>
            <EquipmentHeader className="flex_csb">
              <div className="flex_ccr" style={{ gap: 8 }}>
                <img {...getEquipmentIcon(equipment)} />
                <p className="name">{equipment.name}</p>
              </div>
            </EquipmentHeader>
            <EquipmentInfo className="flex_csb">
              <div>
                <p className="subinfo">
                  {equipment.category} - {equipment.weight} Kg
                </p>
                <p className="subinfo">
                  {equipment.cost.quantity + " " + equipment.cost.unit}
                </p>
              </div>
              {equipment?.damage && (
                <button
                  className="roll_btn flex_ccr"
                  onClick={handleButtonClick}
                >
                  <img src={d20} alt="d20" />
                  <p>
                    {equipment.damage.dice?.quantity}
                    {equipment.damage.dice?.type}
                  </p>
                </button>
              )}
              {equipment?.category === "Armadura" && (
                <button
                  className="equip_btn flex_ccr"
                  disabled={isEquiped}
                  onClick={equipArmor}
                >
                  <p>{isEquiped ? "Equipado" : "Equipar"}</p>
                </button>
              )}
            </EquipmentInfo>
          </div>
        </EquipmentContainer>
      </SwipeToDelete>
    </Container>
  );
}
