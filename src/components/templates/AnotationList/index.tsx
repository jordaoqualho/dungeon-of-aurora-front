import { Anotation } from "@/components/atoms";
import { AnotationModal } from "@/components/molecules";
import { anotationService } from "@/connection/anotationService";
import { defaultAnotation } from "@/constants";
import { showToast } from "@/providers";
import { AnotationType, Character } from "@/types";
import { useEffect, useState } from "react";
import { AddButton, Container } from "./styles";

type AnotationListProps = {
  character: Character;
  activeMenu: string;
};

export function AnotationList(props: AnotationListProps) {
  const { activeMenu, character } = props;
  const [anotationList, setAnotationList] = useState<AnotationType[]>([]);
  const [showAnotationModal, setShowAnotationModal] = useState(false);
  const [selectedAnotation, setSelectedAnotation] =
    useState<AnotationType>(defaultAnotation);

  const removeAnotation = (deletedAnotationId?: string) => {
    if (!deletedAnotationId) return;
    const newAnotationList = anotationList.filter(
      (anotation) => anotation._id !== deletedAnotationId
    );

    anotationService
      .delete(deletedAnotationId)
      .then(() => {
        showToast("dismissAll");
        showToast("Anotação deletada com sucesso!", 'success');
        setAnotationList(newAnotationList);
      })
      .catch((error) => console.error(error));
  };

  const updateAnotations = (updatedAnotation: AnotationType) => {
    let foundOne = false;

    const newAnotatioList = anotationList.map((anotation) => {
      if (anotation._id === updatedAnotation._id) {
        foundOne = true;
        return updatedAnotation;
      }
      return anotation;
    });

    if (foundOne) return setAnotationList(newAnotatioList);
    setAnotationList([...newAnotatioList, updatedAnotation]);
  };

  useEffect(() => {
    if (character._id)
      anotationService
        .getByCharacterId(character._id)
        .then((response) => {
          setAnotationList(response);
        })
        .catch((error) => console.error(error));
  }, [character]);

  if (activeMenu !== "Anotations") return <></>;

  return (
    <Container>
      <AddButton
        onClick={() => {
          setShowAnotationModal(true);
          setSelectedAnotation(defaultAnotation);
        }}
      >
        +
      </AddButton>
      <AnotationModal
        anotation={selectedAnotation}
        isOpen={showAnotationModal}
        closeModal={() => setShowAnotationModal(false)}
        updateAnotations={updateAnotations}
        characterId={character._id}
      />
      {anotationList.map((anotation, index) => (
        <Anotation
          key={index}
          anotation={anotation}
          removeAnotation={removeAnotation}
          setSelectedAnotation={setSelectedAnotation}
          openModal={() => setShowAnotationModal(true)}
        />
      ))}
    </Container>
  );
}
