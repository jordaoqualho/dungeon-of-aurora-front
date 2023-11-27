import { Modal } from "@/components";
import { Character } from "@/types";
import { useState } from "react";
import { Buttons, Container, modalStyles } from "./styles";
type SpellModalProps = {
  isOpen: boolean;
  character: Character;
  setCharacter: (value: Character) => void;
  closeModal: () => void;
};

export const PictureModal = (props: SpellModalProps) => {
  const { isOpen, character, setCharacter, closeModal } = props;
  const [picture, setPicture] = useState(character.picture || "");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPicture(event.target.value);
  };

  const onSave = () => {
    setCharacter({ ...character, picture: picture });
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccc">
        <h4>Imagem do persongaem</h4>
        <input
          type="text"
          className="search_input"
          placeholder="Coloque o link da imagem"
          value={picture}
          onChange={handleInputChange}
        />
        <Buttons className="flex_csr">
          <button className="cancel" onClick={() => closeModal()}>
            Cancelar
          </button>
          <button className="save" onClick={() => onSave()}>
            Salvar
          </button>
        </Buttons>
      </Container>
    </Modal>
  );
};
