import { Modal } from "@/components";
import { Equipment } from "@/types";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Container, modalStyles } from "./styles";

type EquipmentDescritionModalProps = {
  onClose: () => void;
  isOpen: boolean;
  equipment: Equipment;
};

export const EquipmentDescritionModal = (
  props: EquipmentDescritionModalProps
) => {
  const { isOpen, equipment, onClose } = props;

  const renderEquipmentDescription = (description: string[]) => {
    if (!Array.isArray(description)) {
      return <span>{description}</span>;
    }

    const sections = description.map((section, index) => {
      const lines = section.split("\n");

      const formattedLines = lines.map((line, idx) => {
        const parts = line.split(/\*{2,}/g);

        const formattedParts = parts.map((part, partIndex) => {
          return partIndex % 2 === 0 ? (
            <React.Fragment key={partIndex}>{part}</React.Fragment>
          ) : (
            <>
              <br />
              <strong key={partIndex}>{part}</strong>
            </>
          );
        });

        return (
          <React.Fragment key={idx}>
            {formattedParts}
            <br />
          </React.Fragment>
        );
      });

      return <React.Fragment key={index}>{formattedLines}</React.Fragment>;
    });

    return <span>{sections}</span>;
  };

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccs">
        <div className="title">
          <h4>{equipment.name}</h4>
          <span>{equipment.category}</span>
        </div>

        <button className="close_btn flex_ccc" onClick={() => onClose()}>
          <CloseIcon />
        </button>

        <h5 className="text">
          Preço:{" "}
          <span>
            {equipment.cost.quantity} {equipment.cost.unit}
          </span>
        </h5>
        <h5 className="text">
          Peso: <span>{equipment.weight} Kg</span>
        </h5>
        {equipment?.description && equipment.description.length > 0 && (
          <h5 className="text description">
            Descrição: {renderEquipmentDescription(equipment.description)}
          </h5>
        )}
      </Container>
    </Modal>
  );
};
