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
      <div className="flex_csr" style={{ gap: 16 }}>
        <div className="icon flex_ccc">{spell.level}</div>
        <div className="info">
          <p className="name">{spell.name}</p>
          <p className="subinfo">
            {spell.school} - {spell.castingTime} - {spell.range}
          </p>
        </div>
      </div>
    </Container>
  );
}
