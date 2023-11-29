/* eslint-disable @typescript-eslint/no-misused-promises */
import { Modal } from "@/components";
import { SpellsResponse, spellsService } from "@/connection/spellsService";
import { showToast } from "@/providers";
import { Character, DamageAtLevel, DiceRolls, Spell } from "@/types";
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
  const [spells, setSpells] = useState<SpellsResponse[]>([
    { index: "", name: "", url: "" },
  ]);

  const filteredSpells = search
    ? spells
        .filter((spell) =>
          spell.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 6)
    : spells.slice(0, 6);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const convertStringToDiceRolls = (str: string): DiceRolls => {
    const [quantityStr, diceType] = str.split("d");

    if (!quantityStr || !diceType) {
      throw new Error("Invalid dice roll format");
    }

    const quantity = parseInt(quantityStr);
    const dice = `d${diceType}`;
    return { quantity, dice };
  };

  const alreadyHaveTheSpell = (spellName: string): boolean => {
    if (selectedSpells?.some((spell) => spell.name === spellName)) {
      return true;
    }
    return false;
  };

  const addSpell = async (spellIndex: string) => {
    try {
      const spellResponse = await spellsService.getById(spellIndex);
      const { damage } = spellResponse ?? {};

      const slotDamage: DamageAtLevel = {};
      const characterDamage: DamageAtLevel = {};

      const processDamageAtLevel = (
        damageAtLevel: Record<string, string>,
        target: DamageAtLevel
      ) => {
        Object.entries(damageAtLevel).forEach(([level, diceRollStr]) => {
          const slotLevel = parseInt(level);
          const diceRolls = convertStringToDiceRolls(diceRollStr);
          target[slotLevel] = diceRolls;
        });
      };

      if (damage?.damage_at_slot_level) {
        processDamageAtLevel(damage.damage_at_slot_level, slotDamage);
      }

      if (damage?.damage_at_character_level) {
        processDamageAtLevel(damage.damage_at_character_level, characterDamage);
      }

      const classes = spellResponse.classes.map((c) => c.name).join(", ");
      const formatedSpell = {
        name: spellResponse.name,
        level: spellResponse.level,
        description: spellResponse.desc,
        upgrade: spellResponse.higher_level,
        school: spellResponse.school.name,
        castingTime: spellResponse.casting_time,
        range: spellResponse.range,
        duration: spellResponse.duration,
        ritual: spellResponse.ritual,
        concentration: spellResponse.concentration,
        classes,
        damage: damage
          ? {
              type: damage.damage_type.name,
              characterLevel: characterDamage,
              slotLevel: slotDamage,
            }
          : undefined,
      };

      setSelectedSpells([...selectedSpells, formatedSpell]);
    } catch (error) {
      console.error(error);
    }
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
        {filteredSpells.map((spell) => (
          <SpellOption key={spell.index} className="flex_csb">
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
                  ? addSpell(spell.index)
                  : removeSpell(spell.name)
              }
            >
              {alreadyHaveTheSpell(spell.name) ? <CheckIcon /> : <AddIcon />}
            </button>
          </SpellOption>
        ))}
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
