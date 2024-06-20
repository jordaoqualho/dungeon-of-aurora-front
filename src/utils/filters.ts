import { EquipmentType, SpellFilters, SpellType } from "@/types";

export const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const sortSpellsByLevel = (spells: SpellType[]): SpellType[] => {
  return spells.slice(0, 20).sort((a, b) => a.level - b.level);
};

export const filterSpells = (
  spells: SpellType[],
  search: string | undefined,
  filters: SpellFilters
): SpellType[] => {
  let filteredSpells = spells;
  if (search) {
    const normalizedSearchTerm = removeAccents(search.toLowerCase());
    const matchesSearchTerm = (spell: SpellType) =>
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
  equipments: EquipmentType[],
  search: string | undefined
): EquipmentType[] => {
  const validCategories = ["Arma", "Armadura", "Acessório"];

  const equipables = equipments
    .filter((equip) => validCategories.includes(equip.category))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (!search) return equipables;

  const normalizedSearchTerm = removeAccents(search.toLowerCase());

  return equipables.filter((equip) => {
    const normalizedEquipName = removeAccents(equip.name.toLowerCase());
    const normalizedOriginalName = removeAccents(
      equip?.originalName?.toLowerCase() ?? ""
    );

    return (
      normalizedEquipName.includes(normalizedSearchTerm) ||
      normalizedOriginalName.includes(normalizedSearchTerm)
    );
  });
};
