import { SpellModal } from "@/components";
import { Character } from "@/types";
import { useEffect, useState } from "react";
import { AddButton, SpellList } from "./styles";

type SpellsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function Spells(props: SpellsProps) {
  const { character, setCharacter, isEditing, activeMenu } = props;
  const [showSpellModal, setShowSpellModal] = useState(false);
  const [spellList, setSpellList] = useState(character.spells);

  if (isEditing && !character) console.log(character, setCharacter, isEditing);

  const closeSpellModal = () => {
    setShowSpellModal(false);
  };

  useEffect(() => {
    setSpellList([...character.spells]);
  }, [character.spells]);

  if (activeMenu !== "Spells") return <></>;
  return (
    <>
      <AddButton onClick={() => setShowSpellModal(true)}>
        adicionar truque ou magia
      </AddButton>
      <SpellModal
        isOpen={showSpellModal}
        character={character}
        setCharacter={setCharacter}
        closeSpellModal={closeSpellModal}
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
