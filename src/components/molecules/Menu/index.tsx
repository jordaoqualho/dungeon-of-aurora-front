import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { MenuDropdown } from "..";
import { Container } from "./styles";

type MenuProps = {
  setActiveMenu: (value: string) => void;
  activeMenu: string;
};

export const Menu = ({ setActiveMenu, activeMenu }: MenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getSelectedMenu = () => {
    switch (activeMenu) {
      case "Abilities":
        return "Atributos & Proeficiências";

      case "SpellsAndTricks":
        return "Magias & Truques";

      case "Equipments":
        return "Equipamentos";

      case "Characteristics":
        return "Características";

      case "Anotations":
        return "Anotações";

      default:
        return "Atributos & Proeficiências";
    }
  };

  return (
    <Container
      className="flex_ccr"
      $isDropdownOpen={isDropdownOpen}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <p className="title">{getSelectedMenu()}</p>
      <KeyboardArrowDownRoundedIcon className="menu_icon" />
      <MenuDropdown
        isOpen={isDropdownOpen}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
      />
    </Container>
  );
};
