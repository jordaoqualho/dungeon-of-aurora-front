import { Modal } from "@/components";
import { Spell } from "@/types";
import CloseIcon from "@mui/icons-material/Close";
import { Container, modalStyles } from "./styles";
type SpellDescritionModalProps = {
  onClose: () => void;
  isOpen: boolean;
  spell: Spell;
};
export const SpellDescritionModal = (props: SpellDescritionModalProps) => {
  const { isOpen, spell, onClose } = props;

  const isCantrip = (level: number) => {
    if (level === 0) {
      return "cantrip";
    }
    return `lv.${spell.level}`;
  };

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccs">
        <div className="title">
          <h4>{spell.name}</h4>
          <span>
            {spell.school} {isCantrip(spell.level)}
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
        <h5 className="text description">
          <span>{spell.description}</span>
        </h5>
      </Container>
    </Modal>
  );
};
