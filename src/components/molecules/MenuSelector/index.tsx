import { Selector } from "@/components";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Container } from "./styles";

type MenuSelectorProps = {
  isOpen: boolean;
};

export const MenuSelector = ({ isOpen }: MenuSelectorProps) => {
  return (
    <Selector isOpen={isOpen}>
      <Container className="flex">
        <div className="option flex_csr">
          <div className="icon flex_ccc">
            <BlurOnIcon />
          </div>
          <p className="text">Atributos</p>
        </div>
        <div className="option flex_csr">
          <div className="icon flex_ccc">
            <BlurOnIcon />
          </div>
          <p className="text">Habilidades</p>
        </div>
        <div className="option flex_csr">
          <div className="icon flex_ccc">
            <BlurOnIcon />
          </div>
          <p className="text">Magias e Truques</p>
        </div>
      </Container>
    </Selector>
  );
};
