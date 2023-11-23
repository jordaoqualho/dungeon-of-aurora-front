import { SpellModal } from "@/components";
import { Character } from "@/types";
import { useState } from "react";
import { AddButton } from "./styles";

type SpellsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function Spells(props: SpellsProps) {
  const { character, setCharacter, isEditing, activeMenu } = props;
  const [showSpellModal, setShowSpellModal] = useState(true);

  if (activeMenu !== "Spells") return <></>;

  if (isEditing && !character) console.log(character, setCharacter, isEditing);

  return (
    <>
      <AddButton onClick={() => setShowSpellModal(true)}>
        adicionar truque ou magia
      </AddButton>
      <SpellModal isOpen={showSpellModal} />
    </>
  );
}
