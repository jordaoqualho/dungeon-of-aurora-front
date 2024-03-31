import { FilterDropdown } from "@/components";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

type FilterProps = {
  title: string;
  filterOptions: string[];
  activeFilter: string;
  setActiveFilter: (value: string) => void;
};

export function Filter(props: FilterProps) {
  const { title, filterOptions, activeFilter, setActiveFilter } = props;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const noActiveFilter = activeFilter === "" || isFilterOpen;

  const getSelectedFilter = () => {
    if (filterOptions.includes(activeFilter) && !isFilterOpen)
      return activeFilter;
    return title;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen, setActiveFilter]);

  return (
    <Container
      className="flex_csb"
      $isFilterOpen={isFilterOpen}
      onClick={() => setIsFilterOpen(!isFilterOpen)}
      noActiveFilter={noActiveFilter}
      ref={dropdownRef}
    >
      <p className="title">{getSelectedFilter()}</p>
      {noActiveFilter ? (
        <KeyboardArrowDownRoundedIcon className="menu_icon" />
      ) : (
        <CloseIcon
          className="menu_icon"
          onClick={(e) => {
            e.stopPropagation();
            setActiveFilter("");
          }}
        />
      )}
      <FilterDropdown
        isOpen={isFilterOpen}
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
        filterOptions={filterOptions}
      />
    </Container>
  );
}
