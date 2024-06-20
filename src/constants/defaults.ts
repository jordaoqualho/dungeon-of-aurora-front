import { AnotationType, Character, SpellSlotType, SpellType } from "@/types";

export const defaultSpellSlot: SpellSlotType = {
  firstLevel: { available: 4, max: 4 },
  secondLevel: { available: 3, max: 3 },
  thirdLevel: { available: 3, max: 3 },
  fourthLevel: { available: 3, max: 3 },
  fifthLevel: { available: 3, max: 3 },
  sixthLevel: { available: 2, max: 2 },
  seventhLevel: { available: 2, max: 2 },
  eighthLevel: { available: 1, max: 1 },
  ninthLevel: { available: 1, max: 1 },
};

export const defaultSpell: SpellType = {
  _id: "",
  name: "",
  level: 0,
  description: [""],
  upgrade: [""],
  school: "",
  castingTime: "",
  range: "",
  duration: "",
  ritual: false,
  concentration: false,
  classes: "",
  originalName: "",
};

export const defaultAnotation: AnotationType = {
  title: "",
  information: "",
  characterId: "",
};

export const defaultCharacter: Character = {
  _id: "",
  name: "",
  hitPointDices: {
    quantity: 1,
    dice: "d6",
  },
  attributes: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  armorClass: {
    value: 10,
  },
  spellSlots: defaultSpellSlot,
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
  subClass: "",
  race: "",
  skills: [],
  equipments: [],
  gold: 0,
  quests: [],
  inspiration: false,
  features: [],
};
