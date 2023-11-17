import { calculateAbilityModifier } from "@/utils";
import { ChangeEvent } from "react";

type AttributeProps = {
  label: string;
  value: number;
  name: string;
  handeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
};

export function Attribute(props: AttributeProps) {
  const { label, value, name, handeChange, isEditing } = props;
  const modifier: string = calculateAbilityModifier(value);
  const modifierValue: number = parseInt(modifier, 10);
  const isNegative: boolean = modifierValue < 0;
  const quantity = Math.abs(modifierValue);

  return (
    <div className="capability flex_csr">
      <div className={`mod flex_ccc ${isEditing ? "editing" : ""}`}>
        <input type="text" name={name} value={value} onChange={handeChange} />
      </div>
      <p>{label}</p>
      <div className="points flex_ccc">
        {new Array(5).fill(0).map((_, index) => (
          <div key={index} className="mark" />
        ))}
      </div>
      <div className="points flex_ccc">
        {new Array(quantity).fill(0).map((_, index) => (
          <div
            key={index}
            className={`${isNegative ? "negative" : "positive"} `}
          />
        ))}
      </div>
    </div>
  );
}
