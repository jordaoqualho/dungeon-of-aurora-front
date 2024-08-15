import { SpellAditionModal, SpellList, SpellSlots } from "@/components";
import { SpellDescritionModal } from "@/components/molecules/SpellDescritionModal";
import { defaultSpell } from "@/constants";
import { Character, SpellType } from "@/types";
import { useMemo, useState } from "react";
import { AddButton, Container } from "./styles";

type SpellsAndTricksProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

type SpellLevelKey =
  | "cantrips"
  | "firstLevel"
  | "secondLevel"
  | "thirdLevel"
  | "fourthLevel"
  | "fifthLevel"
  | "sixthLevel"
  | "seventhLevel"
  | "eighthLevel"
  | "ninthLevel";

const initialAccordionControl = {
  cantrips: true,
  firstLevel: true,
  secondLevel: true,
  thirdLevel: true,
  fourthLevel: true,
  fifthLevel: true,
  sixthLevel: true,
  seventhLevel: true,
  eighthLevel: true,
  ninthLevel: true,
};

export function SpellsAndTricks({
  character,
  setCharacter,
  activeMenu,
}: SpellsAndTricksProps) {
  const [showSpellAditionModal, setShowSpellAditionModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(defaultSpell);
  const [accordionControl, setAccordionControl] = useState(
    initialAccordionControl
  );

  const organizeSpells = useMemo(() => {
    const spellLevels = {
      cantrips: [] as SpellType[],
      firstLevel: [] as SpellType[],
      secondLevel: [] as SpellType[],
      thirdLevel: [] as SpellType[],
      fourthLevel: [] as SpellType[],
      fifthLevel: [] as SpellType[],
      sixthLevel: [] as SpellType[],
      seventhLevel: [] as SpellType[],
      eighthLevel: [] as SpellType[],
      ninthLevel: [] as SpellType[],
    };

    character.spells.forEach((spell) => {
      switch (spell.level) {
        case 0:
          spellLevels.cantrips.push(spell);
          break;
        case 1:
          spellLevels.firstLevel.push(spell);
          break;
        case 2:
          spellLevels.secondLevel.push(spell);
          break;
        case 3:
          spellLevels.thirdLevel.push(spell);
          break;
        case 4:
          spellLevels.fourthLevel.push(spell);
          break;
        case 5:
          spellLevels.fifthLevel.push(spell);
          break;
        case 6:
          spellLevels.sixthLevel.push(spell);
          break;
        case 7:
          spellLevels.seventhLevel.push(spell);
          break;
        case 8:
          spellLevels.eighthLevel.push(spell);
          break;
        case 9:
          spellLevels.ninthLevel.push(spell);
          break;
        default:
          console.warn(`Spell level ${spell.level} is not supported`);
          break;
      }
    });

    return spellLevels;
  }, [character.spells]);

  const spellLevels = useMemo(
    () => [
      {
        title: "Primeiro Nível",
        key: "firstLevel" as SpellLevelKey,
        list: organizeSpells.firstLevel,
      },
      {
        title: "Segundo Nível",
        key: "secondLevel" as SpellLevelKey,
        list: organizeSpells.secondLevel,
      },
      {
        title: "Terceiro Nível",
        key: "thirdLevel" as SpellLevelKey,
        list: organizeSpells.thirdLevel,
      },
      {
        title: "Quarto Nível",
        key: "fourthLevel" as SpellLevelKey,
        list: organizeSpells.fourthLevel,
      },
      {
        title: "Quinto Nível",
        key: "fifthLevel" as SpellLevelKey,
        list: organizeSpells.fifthLevel,
      },
      {
        title: "Sexto Nível",
        key: "sixthLevel" as SpellLevelKey,
        list: organizeSpells.sixthLevel,
      },
      {
        title: "Sétimo Nível",
        key: "seventhLevel" as SpellLevelKey,
        list: organizeSpells.seventhLevel,
      },
      {
        title: "Oitavo Nível",
        key: "eighthLevel" as SpellLevelKey,
        list: organizeSpells.eighthLevel,
      },
      {
        title: "Nono Nível",
        key: "ninthLevel" as SpellLevelKey,
        list: organizeSpells.ninthLevel,
      },
    ],
    [organizeSpells]
  );

  const closeSpellAditionModal = () => {
    setShowSpellAditionModal(false);
  };

  if (activeMenu !== "SpellsAndTricks") return null;

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
        spellList={organizeSpells.cantrips}
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

      {spellLevels.map((spellLevel) => (
        <SpellList
          key={spellLevel.key}
          title={spellLevel.title}
          setDescriptionModal={setDescriptionModal}
          setSelectedSpell={setSelectedSpell}
          spellList={spellLevel.list}
          isOpen={accordionControl[spellLevel.key]}
          characterLevel={character.level}
          character={character}
          setCharacter={setCharacter}
          setIsOpen={() =>
            setAccordionControl({
              ...accordionControl,
              [spellLevel.key]: !accordionControl[spellLevel.key],
            })
          }
        />
      ))}
    </Container>
  );
}
