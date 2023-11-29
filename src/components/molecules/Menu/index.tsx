import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
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
        return "Habilidades";

      case "SpellsAndTricks":
        return "Magias e Truques";

      case "Equipments":
        return "Equipamentos";

      case "TurnActions":
        return "Ações no turno";

      default:
        return "Habilidades";
    }
  };

  return (
    <Container
      className="flex_csr"
      onClick={() => setIsSelectorOpen(!isSelectorOpen)}
    >
      <div className="icon_box flex_ccc">
        <ViewListRoundedIcon className="menu_icon" />
      </div>
      <p className="title">{getSelectedMenu()}</p>
      <MenuSelector isOpen={isSelectorOpen} setActiveMenu={setActiveMenu} />
    </Container>
  );
};
