import { Spell, SpellAditionModal } from "@/components";
import { SpellDescritionModal } from "@/components/molecules/SpellDescritionModal";
import { Character } from "@/types";
import { useEffect, useState } from "react";
import { AddButton, SpellList } from "./styles";
import { defaultSpell } from "@/constants";

type SpellsAndTricksProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function SpellsAndTricks(props: SpellsAndTricksProps) {
  const { character, setCharacter, isEditing, activeMenu } = props;
  const [showSpellAditionModal, setShowSpellAditionModal] = useState(false);
  const [spellList, setSpellList] = useState(character.spells);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(defaultSpell);

  if (isEditing && !character) console.log(character, setCharacter, isEditing);

  const closeSpellAditionModal = () => {
    setShowSpellAditionModal(false);
  };

  useEffect(() => {
    setSpellList([...character.spells]);
  }, [character.spells]);

  if (activeMenu !== "SpellsAndTricks") return <></>;

  return (
    <>
      <AddButton onClick={() => setShowSpellAditionModal(true)}>
        adicionar truque ou magia
      </AddButton>
      <SpellAditionModal
        isOpen={showSpellAditionModal}
        character={character}
        setCharacter={setCharacter}
        closeSpellAditionModal={closeSpellAditionModal}
      />
      <SpellDescritionModal
        isOpen={descriptionModal}
        spell={selectedSpell}
        onClose={() => setDescriptionModal(false)}
      />
      <SpellList>
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
      </SpellList>
    </>
  );
}
