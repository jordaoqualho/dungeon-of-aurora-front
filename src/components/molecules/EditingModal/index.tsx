import { Modal } from "@/components";
import { Container, modalStyles } from "./styles";

type EditingModalProps = {
  isOpen: boolean;
  cancelEditing: () => void;
  onSave: () => Promise<void>;
};

export const EditingModal = (props: EditingModalProps) => {
  const { isOpen, cancelEditing, onSave } = props;

  return (
    <Modal
      isOpen={isOpen}
      overlay={false}
      lockScroll={false}
      customStyle={modalStyles}
    >
      <Container className="flex_ccc">
        <h4>Modo Edição</h4>
        <div className="buttons flex_csr">
          <button className="cancel" onClick={() => cancelEditing()}>
            Cancelar
          </button>
          <button className="save" onClick={() => onSave()}>
            Salvar
          </button>
        </div>
      </Container>
    </Modal>
  );
};
