import { Filter } from "@/components";
import { magicClasses, schoolsOfMagic, spellLevels } from "@/constants";
import { Container } from "./styles";

// type SpellsFiltersProps = {};

export const SpellsFilters = () => {
  return (
    <Container className="flex_csb">
      <Filter title="Escolas" filterOptions={schoolsOfMagic} />
      <Filter title="Classes" filterOptions={magicClasses} />
      <Filter title="Níveis" filterOptions={spellLevels} />
    </Container>
  );
};
