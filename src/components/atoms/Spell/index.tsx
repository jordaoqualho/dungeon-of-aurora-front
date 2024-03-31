/* eslint-disable @typescript-eslint/no-misused-promises */
import { d20 } from "@/assets";
import { spellIcons } from "@/constants";
import { showPromiseToast } from "@/providers";
import { Spell } from "@/types";
import { DiceType, getSpellDamage, getSpellIcon, rollDice } from "@/utils";
import { useEffect, useState } from "react";
import SwipeToDelete from "react-swipe-to-delete-ios";
import { DeleteSwipe } from "..";
import { Container, SpellContainer, SpellHeader, SpellInfo } from "./styles";

type SpellProps = {
  spell: Spell;
  onClick: () => void;
  characterLevel: number;
  removeSpell: (equipmentName: string) => void;
};

export function Spell({
  spell,
  onClick,
  characterLevel,
  removeSpell,
}: SpellProps) {
  const [wasDeleted, setWasDeleted] = useState(false);
  const [spellLevel] = useState<number>(() => {
    const slotLevel = spell?.damage?.slotLevel;
    if (slotLevel) {
      const keys = Object.keys(slotLevel);
      const firstKey = keys.length > 0 ? keys[0] : null;
      return firstKey ? parseInt(firstKey) : 1;
    }
    return characterLevel;
  });

  const spellDamage = spell?.damage
    ? getSpellDamage(spell?.damage, spellLevel)
    : undefined;

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const adition = spellDamage?.damageAdition || 0;
    const dice = spellDamage?.actualDamage?.dice as DiceType;
    const quantity = spellDamage?.actualDamage?.quantity ?? 1;
    const totalDamage = rollDice(dice, quantity).total + adition;

    await showPromiseToast(
      `${spell.name} deu ${totalDamage} de dano!`,
      "success"
    );
  };

  useEffect(() => {
    if (!wasDeleted) return;
    setTimeout(() => {
      removeSpell(spell._id);
    }, 500);
  }, [wasDeleted]);

  return (
    <Container $wasDeleted={wasDeleted}>
      <SwipeToDelete
        onDelete={() => setWasDeleted(true)}
        id={spell._id}
        deleteComponent={<DeleteSwipe />}
        className="swiper"
      >
        <SpellContainer className="flex_csb" onClick={onClick}>
          <div className="flex_ssc" style={{ gap: 16, width: "100%" }}>
            <SpellHeader className="flex_csb">
              <div className="flex_ccr" style={{ gap: 8 }}>
                <img
                  src={getSpellIcon(spell.school).src}
                  alt={getSpellIcon(spell.school).alt}
                />
                <p className="name">{spell.name}</p>
              </div>
              <button className="level">N.{spell.level}</button>
            </SpellHeader>
            <SpellInfo className="flex_csb">
              <div>
                <p className="subinfo">
                  {spell.castingTime} - {spell.duration}
                </p>
                <p className="subinfo">{spell.range}</p>
              </div>
              {spell?.damage && (
                <button
                  className="roll_btn flex_ccr"
                  onClick={handleButtonClick}
                >
                  <img src={d20} alt="d20" />
                  <p>{spellDamage?.damageText}</p>
                </button>
              )}
            </SpellInfo>
          </div>
        </SpellContainer>
      </SwipeToDelete>
    </Container>
  );
}
