import { abjuracao_icon, d20 } from "@/assets";
import { Spell } from "@/types";
import { Container } from "./styles";

type SpellProps = {
  spell: Spell;
  onClick: () => void;
};

export function Spell(props: SpellProps) {
  const { spell, onClick } = props;

  return (
    <Container className="flex_csb" onClick={onClick}>
      <div className="flex_ssc" style={{ gap: 16, width: "100%" }}>
        <div className="header flex_csb">
          <div className="flex_ccr" style={{ gap: 8 }}>
            <img src={abjuracao_icon} alt="abjuracao_icon" />
            <p className="name">{spell.name}</p>
          </div>
          <button className="level">N.{spell.level}</button>
        </div>
        <div className="info flex_csb">
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
        </div>
      </div>
    </Container>
  );
}
