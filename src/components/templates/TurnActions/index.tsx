import { Character } from "@/types";

type TurnActionsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function TurnActions(props: TurnActionsProps) {
  const { character, setCharacter, isEditing, activeMenu } = props;

  if (activeMenu !== "TurnActions") return <></>;
  if (isEditing && !character) console.log(character, setCharacter, isEditing);

  return <></>;
}
