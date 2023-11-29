/* eslint-disable @typescript-eslint/no-misused-promises */
import { Modal } from "@/components";
import { Spell } from "@/types";
import { Container, modalStyles } from "./styles";
type SpellDescritionModalProps = {
  isOpen: boolean;
  spell: Spell;
};

export const SpellDescritionModal = (props: SpellDescritionModalProps) => {
  const { isOpen, spell } = props;

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccc">
        <h4>{spell.name}</h4>
      </Container>
    </Modal>
  );
};
