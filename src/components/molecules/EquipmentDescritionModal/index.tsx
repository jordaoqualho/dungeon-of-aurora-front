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
            <React.Fragment key={partIndex}>
              <br />
              <strong>{part}</strong>
            </React.Fragment>
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

  const renderCategory = () => {
    const { category, armorCategory, weaponCategory } = equipment;

    let categoryString = category;
    if (armorCategory) {
      categoryString += ` ${armorCategory}`;
    } else if (weaponCategory) {
      categoryString += ` ${weaponCategory}`;
    }

    return <span>{categoryString}</span>;
  };

  const renderValues = () => {
    const { damage, twoHandedDamage, armorClass } = equipment;

    if (damage) {
      const { quantity, type } = damage.dice;
      const damageString = twoHandedDamage
        ? `${quantity}${type}/${twoHandedDamage.dice.quantity}${twoHandedDamage.dice.type}`
        : `${quantity}${type}`;
      return (
        <h5 className="text">
          Dano:{" "}
          <span>
            {damageString} ({damage.type})
          </span>
        </h5>
      );
    }
    if (armorClass) {
      const { base, dex_bonus, max_bonus } = armorClass;
      const dexBonusString = dex_bonus
        ? `+ Mod. Dextreza ${max_bonus ? `(Máx. +${max_bonus})` : ""}`
        : "";
      return (
        <h5 className="text">
          CA:{" "}
          <span>
            {base} {dexBonusString}
          </span>
        </h5>
      );
    }
    return null;
  };

  const renderProperties = () => {
    const { properties } = equipment;

    if (properties) {
      const propertiesString = properties.join(", ");

      return (
        <h5 className="text">
          Propriedades: <span>{propertiesString}</span>
        </h5>
      );
    }
  };

  const renderRange = () => {
    const { range } = equipment;

    if (range) {
      return (
        <h5 className="text">
          Alcance:{" "}
          <span>
            {range.normal}
            {range?.long ? `/${range.long}` : ""} Quad.
          </span>
        </h5>
      );
    }
  };

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccs">
        <div className="title">
          <h4>{equipment.name}</h4>
          <span>Inglês: {equipment.originalName}</span>
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

        {renderValues()}

        <h5 className="text">Categoria: {renderCategory()}</h5>

        {equipment?.stealthDisadvantage && (
          <h5 className="text">Desvantagem em Furtividade</h5>
        )}

        {renderProperties()}

        {renderRange()}
        <h5 className="text">
          Descrição <br />{" "}
        </h5>
        <div className="description">
          {equipment?.description && equipment.description.length > 0 && (
            <h5 className="text">
              {renderEquipmentDescription(equipment.description)}
            </h5>
          )}
          <br />
          {equipment?.special && equipment.special.length > 0 && (
            <h5 className="text">
              Características Especiais
              {renderEquipmentDescription(equipment.special)}
            </h5>
          )}
        </div>
      </Container>
    </Modal>
  );
};
