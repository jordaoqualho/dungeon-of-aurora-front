/* eslint-disable @typescript-eslint/no-misused-promises */
import { Modal } from "@/components";
import { Container } from "./styles";

type EditingModalProps = {
  isOpen: boolean;
  cancelEditing: () => void;
  onSave: () => Promise<void>;
};

export const EditingModal = (props: EditingModalProps) => {
  const { isOpen, cancelEditing, onSave } = props;

  return (
    <Modal isOpen={isOpen}>
      <Container className="flex_ccc">
        <h4>Modo Edição</h4>
        <div className="buttons flex_csr">
          <button className="save" onClick={() => onSave()}>
            Salvar
          </button>
          <button className="cancel" onClick={() => cancelEditing()}>
            Cancelar
          </button>
        </div>
      </Container>
    </Modal>
  );
};
