import { useActionContext } from "@/contexts";
import { Character } from "@/types";
import { useState } from "react";
import { Container } from "./styles";

type CoinsProps = {
  character: Character;
  setCharacter: (value: Character) => void;
};

export function Coins({ character, setCharacter }: CoinsProps) {
  const [characterGold, setCharacterGold] = useState(character.gold | 0);
  const actionContext = useActionContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setCharacterGold(value > 99999 ? 99999 : value);

    const newCharacterData = { ...character, gold: value };
    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  return (
    <Container className="flex_csb">
      <div className="title">Ouro do personagem</div>
      <input type="number" value={characterGold} onChange={handleChange} />
    </Container>
  );
}
