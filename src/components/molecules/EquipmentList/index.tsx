import { Equipment } from "@/components";
import { Equipment as EquipmentType } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Container } from "./styles";

type EquipmentDescritionModalProps = {
  setDescriptionModal: (value: boolean) => void;
  setSelectedEquipment: (value: EquipmentType) => void;
  characterLevel: number;
  equipmentList: EquipmentType[];
  setIsOpen: () => void;
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
  } = props;

  if (equipmentList.length === 0) return <></>;

  return (
    <Container $isOpen={isOpen}>
      <button className="title flex_ccr" onClick={setIsOpen}>
        <p>{title}</p>
        <KeyboardArrowDownRoundedIcon className="menu_icon" />
      </button>

      <div className="equipments_container">
        {equipmentList.map((equipment, index) => (
          <Equipment
            key={index}
            equipment={equipment}
            characterLevel={characterLevel}
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
