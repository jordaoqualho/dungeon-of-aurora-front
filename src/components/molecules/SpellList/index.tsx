import { Spell } from "@/components";
import { Spell as SpellType } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Container } from "./styles";

type SpellDescritionModalProps = {
  setDescriptionModal: (value: boolean) => void;
  setSelectedSpell: (value: SpellType) => void;
  setIsOpen: () => void;
  spellList: SpellType[];
  isOpen: boolean;
  title: string;
};

export const SpellList = (props: SpellDescritionModalProps) => {
  const {
    spellList,
    isOpen,
    setIsOpen,
    title,
    setDescriptionModal,
    setSelectedSpell,
  } = props;

  return (
    <Container $isOpen={isOpen}>
      <button className="title flex_ccr" onClick={setIsOpen}>
        <p>{title}</p>
        <KeyboardArrowDownRoundedIcon className="menu_icon" />
      </button>

      <div className="spells_container">
        {spellList.map((spell, index) => (
          <Spell
            key={index}
            spell={spell}
            onClick={() => {
              setDescriptionModal(true);
              setSelectedSpell(spell);
            }}
          />
        ))}
      </div>
    </Container>
  );
};
