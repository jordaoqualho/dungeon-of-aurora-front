export type DiceType = "d4" | "d6" | "d8" | "d10" | "d12" | "d20";

interface RollResult {
  total: number;
  rolls: number[];
}

export const rollDice = (dice: DiceType, quantity = 1): RollResult => {
  const diceRanges: Record<DiceType, number> = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
  };

  if (!diceRanges[dice]) {
    throw new Error("Invalid dice type");
  }

  const max = diceRanges[dice];
  const rolls: number[] = [];

  let total = 0;
  for (let i = 0; i < quantity; i++) {
    const roll = Math.floor(Math.random() * max) + 1;
    rolls.push(roll);
    total += roll;
  }

  return {
    total,
    rolls,
  };
};
