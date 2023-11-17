/* eslint-disable @typescript-eslint/no-misused-promises */
import { Modal } from "@/components";
import { Container } from "./styles";

type EditingModalProps = {
  isOpen: boolean;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  onSave: () => Promise<void>;
};

export const EditingModal = (props: EditingModalProps) => {
  const { isOpen, isEditing, setIsEditing, onSave } = props;

  return (
    <Modal isOpen={isOpen}>
      <Container className="flex_ccc">
        <h4>Modo Edição</h4>
        <div className="buttons flex_csr">
          <button className="save" onClick={() => onSave()}>
            Salvar
          </button>
          <button className="cancel" onClick={() => setIsEditing(!isEditing)}>
            Cancelar
          </button>
        </div>
      </Container>
    </Modal>
  );
};
