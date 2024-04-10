import { Spell } from "@/components";
import { useActionContext } from "@/contexts";
import { Character, SpellType } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Container } from "./styles";

type SpellDescritionModalProps = {
  setDescriptionModal: (value: boolean) => void;
  setSelectedSpell: (value: SpellType) => void;
  setCharacter: (value: Character) => void;
  setIsOpen: () => void;
  characterLevel: number;
  spellList: SpellType[];
  character: Character;
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
    characterLevel,
    character,
    setCharacter,
  } = props;
  const actionContext = useActionContext();

  const removeSpell = (spellId: string) => {
    const selectedSpells = [...character.spells];
    const updateSpellList = selectedSpells.filter(
      (spell) => spell._id !== spellId
    );

    const newCharacterData = {
      ...character,
      spells: [...updateSpellList],
    };

    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  if (spellList.length === 0) return <></>;

  return (
    <Container $isOpen={isOpen}>
      <button className="title flex_ccr" onClick={setIsOpen}>
        <p>{title}</p>
        <KeyboardArrowDownRoundedIcon className="menu_icon" />
      </button>

      <div className="spells_container">
        {spellList.map((spell) => (
          <Spell
            key={spell._id}
            spell={spell}
            removeSpell={removeSpell}
            characterLevel={characterLevel}
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
