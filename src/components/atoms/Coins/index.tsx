/* eslint-disable @typescript-eslint/no-misused-promises */
import { useActionContext } from "@/contexts";
import { Character } from "@/types";
import { useState } from "react";
import { Container } from "./styles";

type CoinsProps = {
  character: Character;
};

export function Coins({ character }: CoinsProps) {
  const [characterGold, setCharacterGold] = useState(character.gold | 0);
  const actionContext = useActionContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    console.log("📌  value → ", value);
    setCharacterGold(value > 99999 ? 99999 : value);

    const newCharacterData = { ...character, gold: value };
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
