import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { useState } from "react";
import { MenuSelector } from "../MenuSelector";
import { Container } from "./styles";
export const Menu = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  return (
    <Container className="flex_csr" onClick={() => setIsSelectorOpen(!isSelectorOpen)}>
      <div className="icon_box flex_ccc">
        <ViewListRoundedIcon className="menu_icon" />
      </div>
      <p className="title">Atributos </p>
      <MenuSelector isOpen={isSelectorOpen} />
    </Container>
  );
};
