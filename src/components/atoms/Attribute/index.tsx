import { hexagon_primary } from "@/assets";
import { getAbilityModifier } from "@/utils";
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
  const modifierValue: number = parseInt(modifier, 10);

  return (
    <Container className="flex_ccc">
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
