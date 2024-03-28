export type Spell = {
  _id: string;
  name: string;
  level: number;
  description: string[];
  upgrade: string[];
  school: string;
  castingTime: string;
  range: string;
  duration: string;
  ritual: boolean;
  concentration: boolean;
  classes: string;
  damage?: Damage;
  originalName: string;
};

export type Damage = {
  type: string;
  characterLevel: DamageAtLevel;
  slotLevel: DamageAtLevel;
};

export type DamageAtLevel = {
  [level: number]: DiceRolls;
};

export type DiceRolls = {
  quantity: number;
  dice: string;
};


