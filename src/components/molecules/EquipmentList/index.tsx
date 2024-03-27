import { Equipment } from "@/components";
import { useActionContext } from "@/contexts";
import { Character, Equipment as EquipmentType } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Container } from "./styles";

type EquipmentDescritionModalProps = {
  setDescriptionModal: (value: boolean) => void;
  setSelectedEquipment: (value: EquipmentType) => void;
  setCharacter: (value: Character) => void;
  setIsOpen: () => void;
  character: Character;
  characterLevel: number;
  equipmentList: EquipmentType[];
  isOpen: boolean;
  title: string;
};

export const EquipmentList = (props: EquipmentDescritionModalProps) => {
  const {
    equipmentList,
    isOpen,
    setIsOpen,
    title,
    setDescriptionModal,
    setSelectedEquipment,
    characterLevel,
    character,
    setCharacter,
  } = props;
  const actionContext = useActionContext();

  const removeEquipment = (equipmentId: string) => {
    const selectedEquipments = [...character.equipments];
    const updateEquipmentList = selectedEquipments.filter(
      (equipment) => equipment._id !== equipmentId
    );

    const newCharacterData = {
      ...character,
      equipments: [...updateEquipmentList],
    };

    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  if (equipmentList.length === 0) return <></>;

  return (
    <Container $isOpen={isOpen}>
      <button className="title flex_ccr" onClick={setIsOpen}>
        <p>{title}</p>
        <KeyboardArrowDownRoundedIcon className="menu_icon" />
      </button>

      <div className="equipments_container">
        {equipmentList.map((equipment) => (
          <Equipment
            key={equipment._id}
            equipment={equipment}
            characterLevel={characterLevel}
            removeEquipment={removeEquipment}
            onClick={() => {
              setDescriptionModal(true);
              setSelectedEquipment(equipment);
            }}
          />
        ))}
      </div>
    </Container>
  );
};
