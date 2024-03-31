import { Dropdown } from "@/components";
import { Container, dropdownStyle } from "./styles";

type FilterDropdownProps = {
  isOpen: boolean;
  activeFilter: string;
  setActiveFilter: (value: string) => void;
  filterOptions: string[];
};

export const FilterDropdown = (props: FilterDropdownProps) => {
  const { isOpen, setActiveFilter, activeFilter, filterOptions } = props;

  const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedId = event.currentTarget.id;
    setActiveFilter(clickedId);
  };

  return (
    <Dropdown isOpen={isOpen} style={dropdownStyle}>
      <Container className="flex" $activeFilter={activeFilter}>
        {filterOptions.map((option) => (
          <div
            className="option flex_ccc"
            onClick={(e) => handleOptionClick(e)}
            key={option}
            id={option}
          >
            <p className="text">{option}</p>
          </div>
        ))}
      </Container>
    </Dropdown>
  );
};
