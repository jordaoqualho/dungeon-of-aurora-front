import { Modal, SpellsFilters } from "@/components";
import { spellsService } from "@/connection/spellsService";
import { initialSpell } from "@/constants";
import { useActionContext } from "@/contexts";
import { showToast } from "@/providers";
import { Character, SpellType } from "@/types";
import { filterSpells, getSpellIcon } from "@/utils";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { Buttons, Container, SpellOption, modalStyles } from "./styles";

type SpellAditionModalProps = {
  isOpen: boolean;
  character: Character;
  closeSpellAditionModal: () => void;
  setCharacter: (value: Character) => void;
  setDescriptionModal: (value: boolean) => void;
  setSelectedSpell: (value: SpellType) => void;
};
export const SpellAditionModal = (props: SpellAditionModalProps) => {
  const {
    isOpen,
    character,
    setCharacter,
    closeSpellAditionModal,
    setDescriptionModal,
    setSelectedSpell,
  } = props;
  const [selectedSpells, setSelectedSpells] = useState<SpellType[]>(
    character.spells
  );
  const [search, setSearch] = useState("");
  const [spells, setSpells] = useState<SpellType[]>([initialSpell]);
  const [filters, setFilters] = useState({ school: "", class: "", level: "" });
  const actionContext = useActionContext();
  const filteredSpells = filterSpells(spells, search, filters);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const alreadyHaveTheSpell = (spellName: string): boolean =>
    !!selectedSpells?.some((spell) => spell.name === spellName);

  const addSpell = (spellToBeAdded: SpellType) => {
    setSelectedSpells([...selectedSpells, spellToBeAdded]);
  };

  const removeSpell = (spellName: string) => {
    const updatedSpells = selectedSpells.filter(
      (spell) => spell.name !== spellName
    );
    setSelectedSpells([...updatedSpells]);
  };

  const cancelSelection = () => {
    setSearch("");
    closeSpellAditionModal();
  };

  const saveSpells = () => {
    const newCharacterData = {
      ...character,
      spells: [...selectedSpells],
    };

    setCharacter(newCharacterData);
    showToast("Magias e truques salvos", "success");
    setSearch("");
    closeSpellAditionModal();
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  useEffect(() => {
    spellsService
      .get()
      .then((response) => {
        setSpells(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setSelectedSpells([...character.spells]);
  }, [character.spells]);

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccc">
        <h4>Magias e Truques</h4>
        <input
          autoFocus
          type="text"
          className="search_input"
          placeholder="Digite o nome da magia ou truque"
          value={search}
          onChange={handleInputChange}
        />

        <SpellsFilters
          filters={filters}
          setFilters={setFilters}
          character={character}
        />

        <div className="spell_container flex_ssc">
          {filteredSpells.map((spell: SpellType) => (
            <SpellOption
              key={spell._id}
              className="flex_csb"
              onClick={() => {
                setDescriptionModal(true);
                setSelectedSpell(spell);
              }}
            >
              <div className="flex_csr" style={{ gap: 10 }}>
                <div className="icon flex_ccc">
                  <img
                    src={getSpellIcon(spell.school).src}
                    alt={getSpellIcon(spell.school).alt}
                  />
                </div>
                <p className="name">{spell.name}</p>
                <p className="level">N.{spell.level}</p>
              </div>
              <button
                className={`add flex_ccc ${
                  alreadyHaveTheSpell(spell.name) ? "added" : ""
                }`}
                onClick={(
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  event.stopPropagation();
                  if (!alreadyHaveTheSpell(spell.name)) {
                    addSpell(spell);
                  } else {
                    removeSpell(spell.name);
                  }
                }}
              >
                {alreadyHaveTheSpell(spell.name) ? <CheckIcon /> : <AddIcon />}
              </button>
            </SpellOption>
          ))}
        </div>

        <Buttons className="flex_csr">
          <button className="cancel" onClick={cancelSelection}>
            Cancelar
          </button>
          <button className="save" onClick={saveSpells}>
            Salvar
          </button>
        </Buttons>
      </Container>
    </Modal>
  );
};
