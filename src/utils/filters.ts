import { Equipment, Spell, SpellFilters } from "@/types";

export const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const sortSpellsByLevel = (spells: Spell[]): Spell[] => {
  return spells.slice(0, 20).sort((a, b) => a.level - b.level);
};

export const filterSpells = (
  spells: Spell[],
  search: string | undefined,
  filters: SpellFilters
): Spell[] => {
  let filteredSpells = spells;
  if (search) {
    const normalizedSearchTerm = removeAccents(search.toLowerCase());
    const matchesSearchTerm = (spell: Spell) =>
      removeAccents(spell.name.toLowerCase()).includes(normalizedSearchTerm) ||
      removeAccents(spell?.originalName?.toLowerCase() ?? "").includes(
        normalizedSearchTerm
      );
    filteredSpells = spells.filter(matchesSearchTerm);
  }

  if (filters.school) {
    filteredSpells = filteredSpells.filter(
      (spell) => spell.school === filters.school
    );
  }
  if (filters.class) {
    filteredSpells = filteredSpells.filter((spell) =>
      spell.classes.includes(filters.class)
    );
  }
  if (filters.level) {
    const numberLevel = parseInt(filters.level.replace(/\D/g, ""), 10);
    filteredSpells = filteredSpells.filter(
      (spell) => spell.level === numberLevel
    );
  }

  filteredSpells = sortSpellsByLevel(filteredSpells).slice(0, 20);

  return filteredSpells;
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
