import { Filter } from "@/components";
import { magicClasses, schoolsOfMagic, spellLevels } from "@/constants";
import { SpellFilters } from "@/types";
import { Container } from "./styles";

type SpellsFiltersProps = {
  filters: SpellFilters;
  setFilters: (value: SpellFilters) => void;
};

export const SpellsFilters = ({ filters, setFilters }: SpellsFiltersProps) => {
  const updateFilter = (key: keyof SpellFilters, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

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
