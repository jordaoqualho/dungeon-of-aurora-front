import { Selector } from "@/components";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Container } from "./styles";

type MenuSelectorProps = {
  isOpen: boolean;
  setActiveMenu: (value: string) => void;
};

export const MenuSelector = ({ isOpen, setActiveMenu }: MenuSelectorProps) => {
  const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedId = event.currentTarget.id;
    setActiveMenu(clickedId);
  };

  return (
    <Selector isOpen={isOpen}>
      <Container className="flex">
        <div
          className="option flex_csr"
          id="Abilities"
          onClick={(e) => handleOptionClick(e)}
        >
          <div className="icon flex_ccc">
            <BlurOnIcon />
          </div>
          <p className="text">Habilidades</p>
        </div>
        <div
          className="option flex_csr"
          id="Spells"
          onClick={(e) => handleOptionClick(e)}
        >
          <div className="icon flex_ccc">
            <BlurOnIcon />
          </div>
          <p className="text">Magias e Truques</p>
        </div>
        <div
          className="option flex_csr"
          id="Equipments"
          onClick={(e) => handleOptionClick(e)}
        >
          <div className="icon flex_ccc">
            <BlurOnIcon />
          </div>
          <p className="text">Equipamentos</p>
        </div>
        <div
          className="option flex_csr"
          id="TurnActions"
          onClick={(e) => handleOptionClick(e)}
        >
          <div className="icon flex_ccc">
            <BlurOnIcon />
          </div>
          <p className="text">Ações no Turno</p>
        </div>
      </Container>
    </Selector>
  );
};
