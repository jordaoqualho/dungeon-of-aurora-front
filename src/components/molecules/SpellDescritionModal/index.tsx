import { Modal } from "@/components";
import { SpellType } from "@/types";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Container, modalStyles } from "./styles";

type SpellDescritionModalProps = {
  onClose: () => void;
  isOpen: boolean;
  spell: SpellType;
};

export const SpellDescritionModal = (props: SpellDescritionModalProps) => {
  const { isOpen, spell, onClose } = props;

  const isCantrip = (level: number) => {
    if (level === 0) {
      return "Truque de";
    }
    return `Magia nv.${spell.level} de`;
  };

  const renderSpellDescription = (description: string[]) => {
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
          <h4>{spell.name}</h4>
          <span>
            {isCantrip(spell.level)} {spell.school}
          </span>
        </div>

        <button className="close_btn flex_ccc" onClick={() => onClose()}>
          <CloseIcon />
        </button>

        <h5 className="text">
          Alcance: <span>{spell.range}</span>
        </h5>
        <h5 className="text">
          Classes: <span>{spell.classes}</span>
        </h5>
        <h5 className="text">
          Duração: <span>{spell.duration}</span>
        </h5>
        <h5 className="text">
          Tempo de Conjuração: <span>{spell.castingTime}</span>
        </h5>

        <h5 className="text ">Descrição</h5>
        <div className="description">
          <h5 className="text ">{renderSpellDescription(spell.description)}</h5>
          <br />
          {spell?.upgrade[0] && (
            <h5 className="text">
              Em níveis superiores
              <br />
              <span>{spell.upgrade}</span>
            </h5>
          )}
        </div>
      </Container>
    </Modal>
  );
};
