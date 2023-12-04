export const defaultSpell = {
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
