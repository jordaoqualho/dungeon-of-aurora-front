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
  damage: {
    type: "",
    characterLevel: {},
    slotLevel: {},
  },
};
