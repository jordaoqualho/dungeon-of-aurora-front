import {
  abjuration_icon,
  conjuration_icon,
  divination_icon,
  encantation_icon,
  evocation_icon,
  ilusion_icon,
  necromancy_icon,
  transmutation_icon,
} from "@/assets";
import { Spell } from "@/types";

export const initialSpell: Spell = {
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
  damage: {
    type: "",
    characterLevel: {},
    slotLevel: {},
  },
};

export type SpellIconMap = {
  [key: string]: string;
};

export const spellIcons: SpellIconMap = {
  Evocação: evocation_icon,
  Conjuração: conjuration_icon,
  Abjuração: abjuration_icon,
  Transmutação: transmutation_icon,
  Encantamento: encantation_icon,
  Necromático: necromancy_icon,
  Adivinhação: divination_icon,
  Ilusão: ilusion_icon,
  default: evocation_icon,
};
