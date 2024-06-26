import { Coins, EquipmentAditionModal, EquipmentList } from "@/components";
import { EquipmentDescritionModal } from "@/components/molecules";
import { initialEquipment } from "@/constants/equipment";
import { Character, EquipmentType } from "@/types";
import { useEffect, useState } from "react";
import { AddButton, Container } from "./styles";

type EquipmentsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function Equipments(props: EquipmentsProps) {
  const { character, setCharacter, activeMenu } = props;
  const [showEquipmentAditionModal, setShowEquipmentAditionModal] =
    useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(initialEquipment);
  const [accordionControl, setAccordionControl] = useState({
    weapons: true,
    armors: true,
    accessories: true,
  });
  const [organizedEquipmentList, setOrganizedEquipmentList] = useState({
    weapons: character.equipments,
    armors: character.equipments,
    accessories: character.equipments,
  });

  const closeEquipmentAditionModal = () => {
    setShowEquipmentAditionModal(false);
  };

  const organizeEquipments = (equipmentsList: EquipmentType[]) => {
    const armors = equipmentsList.filter(
      (equipment) => equipment.category === "Armadura"
    );

    const weapons = equipmentsList.filter(
      (equipment) => equipment.category === "Arma"
    );

    const accessories = equipmentsList.filter(
      (equipment) => equipment.category === "Acessório"
    );

    return { armors, weapons, accessories };
  };

  useEffect(() => {
    const equipmentList = [...character.equipments];
    const organizedEquipments = organizeEquipments(equipmentList);
    setOrganizedEquipmentList(organizedEquipments);
  }, [character.equipments]);

  if (activeMenu !== "Equipments") return <></>;

  return (
    <Container>
      <AddButton onClick={() => setShowEquipmentAditionModal(true)}>
        +
      </AddButton>
      <EquipmentAditionModal
        isOpen={showEquipmentAditionModal}
        character={character}
        setCharacter={setCharacter}
        closeEquipmentAditionModal={closeEquipmentAditionModal}
        setDescriptionModal={setDescriptionModal}
        setSelectedEquipment={setSelectedEquipment}
      />
      <EquipmentDescritionModal
        isOpen={descriptionModal}
        equipment={selectedEquipment}
        onClose={() => setDescriptionModal(false)}
      />

      <Coins character={character} setCharacter={setCharacter} />

      <EquipmentList
        title="Armas"
        character={character}
        setCharacter={setCharacter}
        setDescriptionModal={setDescriptionModal}
        setSelectedEquipment={setSelectedEquipment}
        equipmentList={organizedEquipmentList.weapons}
        isOpen={accordionControl.weapons}
        characterLevel={character.level}
        setIsOpen={() =>
          setAccordionControl({
            ...accordionControl,
            weapons: !accordionControl.weapons,
          })
        }
      />

      <EquipmentList
        title="Armaduras"
        character={character}
        setCharacter={setCharacter}
        setDescriptionModal={setDescriptionModal}
        setSelectedEquipment={setSelectedEquipment}
        equipmentList={organizedEquipmentList.armors}
        isOpen={accordionControl.armors}
        characterLevel={character.level}
        setIsOpen={() =>
          setAccordionControl({
            ...accordionControl,
            armors: !accordionControl.armors,
          })
        }
      />

      <EquipmentList
        title="Acessórios"
        character={character}
        setCharacter={setCharacter}
        setDescriptionModal={setDescriptionModal}
        setSelectedEquipment={setSelectedEquipment}
        equipmentList={organizedEquipmentList.accessories}
        isOpen={accordionControl.accessories}
        characterLevel={character.level}
        setIsOpen={() =>
          setAccordionControl({
            ...accordionControl,
            accessories: !accordionControl.accessories,
          })
        }
      />
    </Container>
  );
}
