/* eslint-disable @typescript-eslint/no-misused-promises */
import { d20 } from "@/assets";
import { spellIcons } from "@/constants";
import { showPromiseToast, showToast } from "@/providers";
import { Spell } from "@/types";
import { DiceType, getSpellDamage, rollDice } from "@/utils";
import { useState } from "react";
import { Container, SpellHeader, SpellInfo } from "./styles";

type SpellProps = {
  spell: Spell;
  onClick: () => void;
  characterLevel: number;
};

type IconProps = {
  src: string;
  alt: string;
};

export function Spell({ spell, onClick, characterLevel }: SpellProps) {
  const [spellLevel, setSpellLevel] = useState<number>(() => {
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

  const getIconProps = (spellSchool: string): IconProps => {
    const alt: string = spellSchool;
    const src: string = spellIcons[spellSchool] || spellIcons["default"];
    return { src, alt };
  };

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

  return (
    <Container className="flex_csb" onClick={onClick}>
      <div className="flex_ssc" style={{ gap: 16, width: "100%" }}>
        <SpellHeader className="flex_csb">
          <div className="flex_ccr" style={{ gap: 8 }}>
            <img
              src={getIconProps(spell.school).src}
              alt={getIconProps(spell.school).alt}
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
            <button className="roll_btn flex_ccr" onClick={handleButtonClick}>
              <img src={d20} alt="d20" />
              <p>{spellDamage?.damageText}</p>
            </button>
          )}
        </SpellInfo>
      </div>
    </Container>
  );
}
