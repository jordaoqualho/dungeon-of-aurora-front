import { equipmentIcons } from "@/constants";
import { EquipmentType } from "@/types";

type IconProps = {
  src: string;
  alt: string;
};

export const getEquipmentIcon = (equipment: EquipmentType): IconProps => {
  const { category, name } = equipment;
  let src = "",
    alt = "";

  if (!category || !name) {
    return { src, alt };
  }

  if (name.includes("armadura") || category.includes("Armadura")) {
    src = equipmentIcons["Armaduras"];
    alt = "Armadura";
  }
  if (name.includes("poção") || category.includes("poção")) {
    src = equipmentIcons["Poção"];
    alt = "Poção";
  }
  if (category === "Arma") {
    src = equipmentIcons["Armas"];
    alt = "Arma";
  }
  if (category.includes("Ferramenta")) {
    src = equipmentIcons["Ferramentas"];
    alt = "Ferramenta";
  }
  if (category.includes("Aventura")) {
    src = equipmentIcons["Aventura"];
    alt = "Aventura";
  }
  if (category.includes("Montaria")) {
    src = equipmentIcons["Montaria"];
    alt = "Montaria";
  }
  return { src, alt };
};
