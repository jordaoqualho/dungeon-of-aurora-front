import { Character, SpellType } from "@/types";

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
