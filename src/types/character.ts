import { Equipment, Spell } from ".";

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
  equipments: Equipment[];
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

export type Skill = {
  name: string;
  attribute: string;
};
