import { anotationService } from "@/connection/anotationService";
import { showToast } from "@/providers";
import { AnotationType } from "@/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Body, Container, FullModal, Header } from "./styles";

type ClassSelectorProps = {
  isOpen: boolean;
  anotation: AnotationType;
  characterId: string;
  closeModal: () => void;
  updateAnotations: (anotation: AnotationType) => void;
};

export const AnotationModal = ({
  isOpen,
  anotation,
  characterId,
  closeModal,
  updateAnotations,
}: ClassSelectorProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const titleAreaRef = useRef<HTMLTextAreaElement>(null);
  const [currentAnotation, setCurrentAnotation] = useState(anotation);

  const handleAnotationChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.target;

    setCurrentAnotation({ ...currentAnotation, [name]: value });

    if (titleAreaRef.current && name === "title") {
      titleAreaRef.current.style.height = "auto";
      titleAreaRef.current.style.height = `${titleAreaRef.current.scrollHeight}px`;
    }
  };

  const handleSavingAnotation = async () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    const updatedAnotation = { ...currentAnotation, characterId };

    try {
      if (updatedAnotation._id) {
        await anotationService.put(updatedAnotation);
        updateAnotations(updatedAnotation);
      } else {
        const newAnotation = await anotationService.post(updatedAnotation);
        updateAnotations(newAnotation);
      }
    } catch (error) {
      console.error(error);
      const action = updatedAnotation._id ? "alterar" : "criar";
      showToast(`Falha ao ${action} a anotação`);
    } finally {
      if (titleAreaRef.current) {
        titleAreaRef.current.style.height = "auto";
      }
      setIsEditing(false);
      closeModal();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    setIsEditing(anotation.title === "");
    setCurrentAnotation(anotation);
  }, [anotation, isOpen]);

  return (
    <FullModal $show={isOpen}>
      <Container className="flex">
        <Header className="flex_csb" $isEditing={isEditing}>
          <div className="flex_csr">
            <button className="arrow_btn flex_ccc" onClick={() => closeModal()}>
              <ArrowBackIcon />
            </button>
          </div>
          <button
            className="action_btn"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => handleSavingAnotation()}
          >
            {isEditing ? "Salvar" : "Editar"}
          </button>
        </Header>
        <Body $isEditing={isEditing}>
          <textarea
            className="title"
            name="title"
            value={currentAnotation.title}
            onChange={handleAnotationChange}
            ref={titleAreaRef}
            placeholder="Insira o título"
            readOnly={!isEditing}
          />
          <textarea
            className="info_field"
            name="information"
            value={currentAnotation.information}
            onChange={handleAnotationChange}
            placeholder="Descreva o que você quer anotar"
            readOnly={!isEditing}
          />
        </Body>
      </Container>
    </FullModal>
  );
};

export default AnotationModal;
