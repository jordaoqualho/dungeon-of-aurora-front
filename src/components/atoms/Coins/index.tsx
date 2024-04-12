/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { Container } from "./styles";

type CoinsProps = {
  gold: number;
};

export function Coins({ gold }: CoinsProps) {
  const [characterGold, setCharacterGold] = useState(gold | 0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setCharacterGold(value > 99999 ? 99999 : value);
  };

  return (
    <Container className="flex_csb">
      <div className="title">Ouro do personagem</div>
      <input type="number" value={characterGold} onChange={handleChange} />
    </Container>
  );
}
