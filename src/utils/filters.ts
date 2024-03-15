import { Equipment, Spell } from "@/types";

export const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const sortSpellsByLevel = (spells: Spell[]): Spell[] => {
  return spells.slice(0, 20).sort((a, b) => a.level - b.level);
};

export const filterSpells = (
  spells: Spell[],
  search: string | undefined
): Spell[] => {
  if (!search) {
    return sortSpellsByLevel(spells);
  }

  const normalizedSearchTerm = removeAccents(search.toLowerCase());

  const matchesSearchTerm = (spell: Spell) =>
    removeAccents(spell.name.toLowerCase()).includes(normalizedSearchTerm);

  const filtered = spells
    .filter(matchesSearchTerm)
    .sort((a, b) => a.level - b.level)
    .slice(0, 20);

  return filtered;
};

export const filterEquipments = (
  equipments: Equipment[],
  search: string | undefined
): Equipment[] => {
  if (!search) {
    return equipments;
  }

  const normalizedSearchTerm = removeAccents(search.toLowerCase());

  const matchesSearchTerm = (equipment: Equipment) =>
    removeAccents(equipment.name.toLowerCase()).includes(normalizedSearchTerm);

  const filtered = equipments.filter(matchesSearchTerm);

  return filtered;
};
