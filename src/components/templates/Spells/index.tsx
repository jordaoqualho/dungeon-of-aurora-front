import { Character } from "@/types";

type SpellsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function Spells(props: SpellsProps) {
  const { character, setCharacter, isEditing, activeMenu } = props;

  if (activeMenu !== "Spells") return <></>;

  if (isEditing && !character) console.log(character, setCharacter, isEditing);

  return <></>;
}
