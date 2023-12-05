import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { MenuSelector } from "../MenuSelector";
import { Container } from "./styles";

type MenuProps = {
  setActiveMenu: (value: string) => void;
  activeMenu: string;
};

export const Menu = ({ setActiveMenu, activeMenu }: MenuProps) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const getSelectedMenu = () => {
    switch (activeMenu) {
      case "Abilities":
        return "Atributos & Proeficiências";

      case "SpellsAndTricks":
        return "Magias & Truques";

      case "Equipments":
        return "Equipamentos";

      case "TurnActions":
        return "Ações no Turno";

      default:
        return "Atributos & Proeficiências";
    }
  };

  return (
    <Container
      className="flex_ccr"
      onClick={() => setIsSelectorOpen(!isSelectorOpen)}
    >
      <p className="title">{getSelectedMenu()}</p>
      <KeyboardArrowDownRoundedIcon className="menu_icon" />
      <MenuSelector isOpen={isSelectorOpen} setActiveMenu={setActiveMenu} />
    </Container>
  );
};
