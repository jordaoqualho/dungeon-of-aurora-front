import { hexagon_border } from "@/assets";
import { showPromiseToast, showToast } from "@/providers";
import { rollDice } from "@/utils";
import React, { ChangeEvent } from "react";
import { Container } from "./styles";

type CapabilityProps = {
  label: string;
  readOnly?: boolean;
  inputName?: string;
  isEditing?: boolean;
  inputValue: string | number;
  hexagonBorder?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Capability: React.FC<CapabilityProps> = ({
  isEditing = false,
  readOnly = true,
  hexagonBorder = false,
  inputValue,
  inputName,
  onChange,
  label,
}) => {
  const rollIniciative = async () => {
    const d20Roll: number = rollDice("d20").total;
    const modifierNumber: number = parseInt(inputValue as string);

    const modifierSign: string = modifierNumber >= 0 ? "+" : "-";
    const formattedModifier = `${modifierSign} ${Math.abs(modifierNumber)}`;

    const text = `${d20Roll} ${formattedModifier}`;
    const total = d20Roll + modifierNumber;

    await showPromiseToast(`Rolou ${total} (${text}) em ${label}`, "success");
  };

  const handleContainerClick = async (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();
    if (isEditing && readOnly)
      showToast("Isso é calculado automaticamente", "warning");

    if (label === "Iniciativa" && !isEditing) await rollIniciative();
  };

  return (
    <Container
      className={`flex_ccc ${isEditing && readOnly ? "read_only" : ""}`}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleContainerClick}
      $hexagonBorder={hexagonBorder}
    >
      <p>{label}</p>
      <div className="mod flex_ccc">
        <input
          type="text"
          name={inputName}
          value={inputValue}
          onChange={onChange}
          readOnly={readOnly}
        />
        {hexagonBorder && (
          <img className="hexagon" src={hexagon_border} alt="hexagon_border" />
        )}
      </div>
    </Container>
  );
};
 