import { Dropdown } from "@/components";
import { Container } from "./styles";

type MenuDropdownProps = {
  isOpen: boolean;
  activeMenu: string;
  setActiveMenu: (value: string) => void;
};

export const MenuDropdown = (props: MenuDropdownProps) => {
  const { isOpen, setActiveMenu, activeMenu } = props;

  const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedId = event.currentTarget.id;
    setActiveMenu(clickedId);
  };

  return (
    <Dropdown isOpen={isOpen}>
      <Container className="flex" $activeMenu={activeMenu}>
        <div
          className="option flex_ccc"
          id="Abilities"
          onClick={(e) => handleOptionClick(e)}
        >
          <p className="text">Atributos & Proeficiências</p>
        </div>
        <div
          className="option flex_ccc"
          id="SpellsAndTricks"
          onClick={(e) => handleOptionClick(e)}
        >
          <p className="text">Magias & Truques</p>
        </div>
        <div
          className="option flex_ccc"
          id="Equipments"
          onClick={(e) => handleOptionClick(e)}
        >
          <p className="text">Equipamentos</p>
        </div>
        <div
          className="option flex_ccc"
          id="Characteristics"
          onClick={(e) => handleOptionClick(e)}
        >
          <p className="text">Características</p>
        </div>
      </Container>
    </Dropdown>
  );
};
