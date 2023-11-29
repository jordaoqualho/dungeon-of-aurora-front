import { SpellAditionModal } from "@/components";
import { Character } from "@/types";
import { useEffect, useState } from "react";
import { AddButton, SpellList } from "./styles";

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
      <SpellList>
        {spellList.map((spell, index) => (
          <div key={index} className="container flex_csb">
            <div className="flex_csr" style={{ gap: 16 }}>
              <div className="icon flex_ccc">{spell.level}</div>
              <div className="info">
                <p className="name">{spell.name}</p>
                <p className="subinfo">
                  {spell.school} - {spell.castingTime} - {spell.range}
                </p>
              </div>
            </div>
          </div>
        ))}
      </SpellList>
    </>
  );
}
