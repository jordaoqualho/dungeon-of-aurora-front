import { Character } from "@/types";

type EquipmentsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function Equipments(props: EquipmentsProps) {
  const { character, setCharacter, isEditing, activeMenu } = props;

  if (activeMenu !== "Spells") return <></>;
  if (isEditing && !character) console.log(character, setCharacter, isEditing);

  return <></>;
}
