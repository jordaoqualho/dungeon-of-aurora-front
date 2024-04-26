import { hexagon_border } from "@/assets";
import { showToast } from "@/providers";
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
  const handleContainerClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (isEditing && readOnly)
      showToast("Isso é calculado automaticamente", "warning");
  };

  return (
    <Container
      className={`flex_ccc ${isEditing && readOnly ? "read_only" : ""}`}
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
