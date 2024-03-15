import { Modal } from "@/components";
import { equipmentService } from "@/connection";
import { initialEquipment } from "@/constants/equipment";
import { useActionContext } from "@/contexts";
import { showToast } from "@/providers";
import { Character, Equipment } from "@/types";
import { filterEquipments, getEquipmentIcon } from "@/utils";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { Buttons, Container, EquipmentOption, modalStyles } from "./styles";

type EquipmentAditionModalProps = {
  isOpen: boolean;
  character: Character;
  closeEquipmentAditionModal: () => void;
  setCharacter: (value: Character) => void;
  setDescriptionModal: (value: boolean) => void;
  setSelectedEquipment: (value: Equipment) => void;
};
export const EquipmentAditionModal = (props: EquipmentAditionModalProps) => {
  const {
    isOpen,
    character,
    setCharacter,
    closeEquipmentAditionModal,
    setDescriptionModal,
    setSelectedEquipment,
  } = props;
  const [selectedEquipments, setSelectedEquipments] = useState<Equipment[]>(
    character.equipments
  );
  const [search, setSearch] = useState("");
  const [equipments, setEquipments] = useState<Equipment[]>([initialEquipment]);
  const actionContext = useActionContext();
  const filteredEquipments = filterEquipments(equipments, search);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const alreadyHaveTheEquipment = (equipmentName: string): boolean =>
    !!selectedEquipments?.some((equipment) => equipment.name === equipmentName);

  const addEquipment = (equipmentToBeAdded: Equipment) => {
    setSelectedEquipments([...selectedEquipments, equipmentToBeAdded]);
  };

  const removeEquipment = (equipmentName: string) => {
    const updatedEquipments = selectedEquipments.filter(
      (equipment) => equipment.name !== equipmentName
    );
    setSelectedEquipments([...updatedEquipments]);
  };

  const cancelSelection = () => {
    setSearch("");
    closeEquipmentAditionModal();
  };

  const saveEquipments = () => {
    const newCharacterData = {
      ...character,
      equipments: [...selectedEquipments],
    };

    setCharacter(newCharacterData);
    showToast("Equipamento salvo", "success");
    setSearch("");
    closeEquipmentAditionModal();
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  useEffect(() => {
    equipmentService
      .get()
      .then((response) => {
        setEquipments(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccc">
        <h4>Equipamentos</h4>
        <input
          type="text"
          className="search_input"
          placeholder="Digite o nome do equipamento"
          value={search}
          onChange={handleInputChange}
        />

        <div className="equipment_container flex_ssc">
          {filteredEquipments.map((equipment: Equipment) => (
            <EquipmentOption
              key={equipment._id}
              className="flex_csb"
              onClick={() => {
                setDescriptionModal(true);
                setSelectedEquipment(equipment);
              }}
            >
              <div className="flex_csr" style={{ gap: 10 }}>
                <div className="icon flex_ccc">
                  <img {...getEquipmentIcon(equipment)} />
                </div>
                <p className="name">{equipment.name}</p>
              </div>
              <button
                className={`add flex_ccc ${
                  alreadyHaveTheEquipment(equipment.name) ? "added" : ""
                }`}
                onClick={(
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  event.stopPropagation();
                  if (!alreadyHaveTheEquipment(equipment.name)) {
                    addEquipment(equipment);
                  } else {
                    removeEquipment(equipment.name);
                  }
                }}
              >
                {alreadyHaveTheEquipment(equipment.name) ? (
                  <CheckIcon />
                ) : (
                  <AddIcon />
                )}
              </button>
            </EquipmentOption>
          ))}
        </div>

        <Buttons className="flex_csr">
          <button className="cancel" onClick={cancelSelection}>
            Cancelar
          </button>
          <button className="save" onClick={saveEquipments}>
            Salvar
          </button>
        </Buttons>
      </Container>
    </Modal>
  );
};
