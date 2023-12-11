import { d20 } from "@/assets";
import { spellIcons } from "@/constants";
import { Spell } from "@/types";
import { Container, SpellHeader, SpellInfo } from "./styles";

type SpellProps = {
  spell: Spell;
  onClick: () => void;
};

type IconProps = {
  src: string;
  alt: string;
};

export function Spell({ spell, onClick }: SpellProps) {
  const getIconProps = (spellSchool: string): IconProps => {
    const alt: string = spellSchool;
    const src: string = spellIcons[spellSchool] || spellIcons["default"];
    return { src, alt };
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

          <button className="roll_btn flex_ccr">
            <img src={d20} alt="d20" />
            <p>3d8</p>
          </button>
        </SpellInfo>
      </div>
    </Container>
  );
}
