import { Character } from "@/types";

type TurnActionsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
  isEditing: boolean;
  activeMenu: string;
};

export function TurnActions(props: TurnActionsProps) {
  const { activeMenu } = props;

  if (activeMenu !== "TurnActions") return <></>;

  return <></>;
}
