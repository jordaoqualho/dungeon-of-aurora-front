import { Anotation } from "@/components/atoms";
import { AnotationModal } from "@/components/molecules";
import { anotationService } from "@/connection/anotationService";
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

  const removeAnotation = (deletedAnotationId: string) => {
    const newAnotationList = anotationList.filter(
      (anotation) => anotation._id !== deletedAnotationId
    );

    setAnotationList(newAnotationList);
    anotationService
      .delete(deletedAnotationId)
      .then(() => {
        showToast("Deletada");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
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
      <AddButton onClick={() => setShowAnotationModal(true)}>+</AddButton>
      <AnotationModal anotation={anotationList[0]} isOpen={true} />
      {anotationList.map((anotation) => (
        <Anotation
          key={anotation._id}
          anotation={anotation}
          removeAnotation={removeAnotation}
        />
      ))}
    </Container>
  );
}
