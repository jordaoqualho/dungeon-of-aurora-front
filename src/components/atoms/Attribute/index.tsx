import { hexagon_primary } from "@/assets";
import { showPromiseToast } from "@/providers";
import { getAbilityModifier, rollDice } from "@/utils";
import { ChangeEvent } from "react";
import { Container } from "./styles";

type AttributeProps = {
  label: string;
  value: number;
  name: string;
  handeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
};

export function Attribute(props: AttributeProps) {
  const { label, value, name, handeChange, isEditing } = props;
  const modifier: string = getAbilityModifier(value);

  const rollAttribute = async () => {
    if (isEditing) return;

    const d20Roll: number = rollDice("d20").total;
    const modifierNumber: number = parseInt(modifier);

    const modifierSign: string = modifierNumber >= 0 ? "+" : "-";
    const formattedModifier = `${modifierSign} ${Math.abs(modifierNumber)}`;

    const text = `${d20Roll} ${formattedModifier}`;
    const total = d20Roll + modifierNumber;

    await showPromiseToast(`Rolou ${total} (${text}) em ${label}`, "success");
  };

  return (
    <Container className="flex_ccc" onClick={rollAttribute}>
      <div className={`mod flex_ccc ${isEditing ? "editing" : ""}`}>
        <p>{label}</p>
        <input
          type="text"
          name={name}
          value={value}
          onChange={handeChange}
          readOnly={!isEditing}
        />
        <span>{modifier}</span>
        <img src={hexagon_primary} alt="hexagon_primary" />
      </div>
    </Container>
  );
}
