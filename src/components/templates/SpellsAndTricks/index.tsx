import { SpellAditionModal, SpellList, SpellSlots } from "@/components";
import { SpellDescritionModal } from "@/components/molecules/SpellDescritionModal";
import { defaultSpell } from "@/constants";
import { Character, SpellType } from "@/types";
import { useEffect, useState } from "react";
import { AddButton, Container } from "./styles";

type SpellsAndTricksProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function SpellsAndTricks(props: SpellsAndTricksProps) {
  const { character, setCharacter, activeMenu } = props;
  const [showSpellAditionModal, setShowSpellAditionModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(defaultSpell);
  const [accordionControl, setAccordionControl] = useState({
    cantrips: true,
    spells: true,
  });
  const [organizedSpellList, setOrganizedSpellList] = useState({
    cantrips: character.spells,
    spells: character.spells,
  });

  const closeSpellAditionModal = () => {
    setShowSpellAditionModal(false);
  };

  const organizeSpells = (spellsList: SpellType[]) => {
    const cantrips = spellsList.filter((spell) => spell.level === 0);
    const spells = spellsList
      .filter((spell) => spell.level !== 0)
      .sort((a, b) => a.level - b.level);

    return { cantrips, spells };
  };

  useEffect(() => {
    const organizedSpells = organizeSpells(character.spells);
    setOrganizedSpellList(organizedSpells);
  }, [character.spells]);

  if (activeMenu !== "SpellsAndTricks") return <></>;

  return (
    <Container>
      <AddButton onClick={() => setShowSpellAditionModal(true)}>+</AddButton>
      <SpellAditionModal
        isOpen={showSpellAditionModal}
        character={character}
        setCharacter={setCharacter}
        closeSpellAditionModal={closeSpellAditionModal}
        setDescriptionModal={setDescriptionModal}
        setSelectedSpell={setSelectedSpell}
      />
      <SpellDescritionModal
        isOpen={descriptionModal}
        spell={selectedSpell}
        onClose={() => setDescriptionModal(false)}
      />

      <SpellSlots character={character} setCharacter={setCharacter} />

      <SpellList
        title="Truques"
        setDescriptionModal={setDescriptionModal}
        setSelectedSpell={setSelectedSpell}
        spellList={organizedSpellList.cantrips}
        isOpen={accordionControl.cantrips}
        characterLevel={character.level}
        character={character}
        setCharacter={setCharacter}
        setIsOpen={() =>
          setAccordionControl({
            ...accordionControl,
            cantrips: !accordionControl.cantrips,
          })
        }
      />

      <SpellList
        title="Magias"
        setDescriptionModal={setDescriptionModal}
        setSelectedSpell={setSelectedSpell}
        spellList={organizedSpellList.spells}
        isOpen={accordionControl.spells}
        characterLevel={character.level}
        character={character}
        setCharacter={setCharacter}
        setIsOpen={() =>
          setAccordionControl({
            ...accordionControl,
            spells: !accordionControl.spells,
          })
        }
      />
    </Container>
  );
}
