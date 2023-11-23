/* eslint-disable @typescript-eslint/no-misused-promises */
import { Modal } from "@/components";
import { Container, modalStyles } from "./styles";

type SpellModalProps = {
  isOpen: boolean;
};

export const SpellModal = (props: SpellModalProps) => {
  const { isOpen } = props;

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccc">
        <h4>Truques e magias</h4>
      </Container>
    </Modal>
  );
};
