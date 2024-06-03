import { DiceType } from "@/utils";
import { EquipmentType, SpellType } from ".";

export type Character = {
  _id: string;
  name: string;
  attributes: Attributes;
  hitPointDices: HitPointDices;
  armorClass: CharacterArmorClass;
  spellSlots: SpellSlotType;
  race: string;
  class: string;
  subClass: string;
  speed: number;
  level: number;
  experience: number;
  hitPoints: number;
  maxHitPoints: number;
  status: string[];
  languages: string[];
  spells: SpellType[];
  userId: string;
  skills: string[];
  equipments: EquipmentType[];
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

type HitPointDices = {
  quantity: number;
  dice: DiceType;
};

export type Skill = {
  name: string;
  attribute: string;
};
type CharacterArmorClass = {
  value: number;
  equipedArmor?: string;
};

export type Slot = {
  available: number;
  max: number;
};

export type SpellSlotType = {
  firstLevel: Slot;
  secondLevel: Slot;
  thirdLevel: Slot;
  fourthLevel: Slot;
  fifthLevel: Slot;
  sixthLevel: Slot;
  seventhLevel: Slot;
  eighthLevel: Slot;
  ninthLevel: Slot;
};

