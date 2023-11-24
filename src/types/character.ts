export type Character = {
  _id: string;
  name: string;
  attributes: Attributes;
  armorClass: number;
  race: string;
  class: string;
  speed: number;
  level: number;
  experience: number;
  hitPoints: number;
  maxHitPoints: number;
  status: string[];
  languages: string[];
  spells: Spell[];
  userId: string;
  skills: string[];
  equipments: string[];
  gold: number;
  quests: Quest[];
  inspiration: number;
  features: Feature[];
  picture?: string;
};

type Attributes = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

type Quest = {
  name: string;
  description: string;
  status: string;
  reward: string;
};

type Feature = {
  name: string;
  level: number;
  description: string;
  classes: string;
};

export type Spell = {
  name: string;
  level: number;
  description: string;
  upgrade: string;
  school: string;
  castingTime: string;
  range: string;
  duration: string;
  ritual: boolean;
  concentration: boolean;
  classes: string;
  damage?: Damage;
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

export type Skill = {
  name: string;
  attribute: string;
};

interface AttributeMapper {
  [key: string]: keyof Character["attributes"];
}

export const attributeMap: AttributeMapper = {
  DES: "dexterity",
  FOR: "strength",
  CON: "constitution",
  INT: "intelligence",
  SAB: "wisdom",
  CAR: "charisma",
};

export const defaultSpell = {
  name: "",
  level: 0,
  description: "",
  upgrade: "",
  school: "",
  castingTime: "",
  range: "",
  duration: "",
  ritual: false,
  concentration: false,
  classes: "",
  damage: {
    type: "",
    characterLevel: {},
    slotLevel: {},
  },
};

export const defaultCharacter = {
  _id: "",
  name: "",
  attributes: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  armorClass: 0,
  speed: 0,
  level: 1,
  experience: 0,
  hitPoints: 0,
  maxHitPoints: 0,
  status: [],
  languages: [],
  spells: [],
  userId: "",
  class: "",
  race: "",
  skills: [],
  equipments: [],
  gold: 0,
  quests: [],
  inspiration: 0,
  features: [],
};
