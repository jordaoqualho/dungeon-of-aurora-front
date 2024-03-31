import { Filter } from "@/components";
import { magicClasses, schoolsOfMagic, spellLevels } from "@/constants";
import { Character, SpellFilters } from "@/types";
import { useEffect } from "react";
import { Container } from "./styles";

type SpellsFiltersProps = {
  filters: SpellFilters;
  setFilters: (value: SpellFilters) => void;
  character: Character;
};

export const SpellsFilters = ({
  filters,
  setFilters,
  character,
}: SpellsFiltersProps) => {
  const updateFilter = (key: keyof SpellFilters, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const startFilterWithCharacterClass = () => {
    if (magicClasses.includes(character?.class))
      updateFilter("class", character.class);
  };

  useEffect(() => {
    startFilterWithCharacterClass();
  }, []);

  return (
    <Container className="flex_csb">
      <Filter
        title="Escolas"
        filterOptions={schoolsOfMagic}
        activeFilter={filters.school}
        setActiveFilter={(value) => updateFilter("school", value)}
      />
      <Filter
        title="Classes"
        filterOptions={magicClasses}
        activeFilter={filters.class}
        setActiveFilter={(value) => updateFilter("class", value)}
      />
      <Filter
        title="Níveis"
        filterOptions={spellLevels}
        activeFilter={filters.level}
        setActiveFilter={(value) => updateFilter("level", value)}
      />
    </Container>
  );
};
