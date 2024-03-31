import { spellIcons } from "@/constants";

type SpellIcon = {
  src: string;
  alt: string;
};

export const getSpellIcon = (spellSchool: string): SpellIcon => {
  const alt: string = spellSchool;
  const src: string = spellIcons[spellSchool] || spellIcons["default"];
  return { src, alt };
};
