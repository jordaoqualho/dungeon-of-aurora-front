import { Modal } from "@/components";
import { spellsService } from "@/connection/spellsService";
import { initialSpell } from "@/constants";
import { showToast } from "@/providers";
import { Character, Spell } from "@/types";
import AddIcon from "@mui/icons-material/Add";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { Buttons, Container, SpellOption, modalStyles } from "./styles";

type SpellAditionModalProps = {
  isOpen: boolean;
  character: Character;
  setCharacter: (value: Character) => void;
  closeSpellAditionModal: () => void;
};

export const SpellAditionModal = (props: SpellAditionModalProps) => {
  const { isOpen, character, setCharacter, closeSpellAditionModal } = props;
  const [selectedSpells, setSelectedSpells] = useState<Spell[]>(
    character.spells
  );
  const [search, setSearch] = useState("");
  const [spells, setSpells] = useState<Spell[]>([initialSpell]);

  const filteredSpells = search
    ? spells
        .filter((spell) =>
          spell.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 20)
    : spells.slice(0, 20);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const alreadyHaveTheSpell = (spellName: string): boolean => {
    if (selectedSpells?.some((spell) => spell.name === spellName)) {
      return true;
    }
    return false;
  };

  const addSpell = (spellToBeAdded: Spell) => {
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
    setCharacter({
      ...character,
      spells: [...selectedSpells],
    });
    showToast("Magias e truques salvos", "success");
    setSearch("");
    closeSpellAditionModal();
  };

  useEffect(() => {
    spellsService
      .get()
      .then((response) => {
        setSpells(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccc">
        <h4>Magias e Truques</h4>
        <input
          type="text"
          className="search_input"
          placeholder="Digite o nome da magia ou truque"
          value={search}
          onChange={handleInputChange}
        />

        <div className="spell_container">
          {filteredSpells.map((spell: Spell) => (
            <SpellOption key={spell._id} className="flex_csb">
              <div className="flex_csr" style={{ gap: 10 }}>
                <div className="icon flex_ccc">
                  <BlurOnIcon />
                </div>
                <p className="name">{spell.name}</p>
              </div>
              <button
                className={`add flex_ccc ${
                  alreadyHaveTheSpell(spell.name) ? "added" : ""
                }`}
                onClick={() =>
                  !alreadyHaveTheSpell(spell.name)
                    ? addSpell(spell)
                    : removeSpell(spell.name)
                }
              >
                {alreadyHaveTheSpell(spell.name) ? <CheckIcon /> : <AddIcon />}
              </button>
            </SpellOption>
          ))}
        </div>

        <Buttons className="flex_csr">
          <button className="cancel" onClick={() => cancelSelection()}>
            Cancelar
          </button>
          <button className="save" onClick={() => saveSpells()}>
            Salvar
          </button>
        </Buttons>
      </Container>
    </Modal>
  );
};
