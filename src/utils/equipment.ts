import { equipmentIcons } from "@/constants";
import { EquipmentType } from "@/types";

type IconProps = {
  src: string;
  alt: string;
};

export const getEquipmentIcon = (equipment: EquipmentType): IconProps => {
  const { category, name } = equipment;

  if (!category || !name) {
    return { src: "", alt: "" };
  }

  const categoryToIconMap: { [key: string]: { src: string; alt: string } } = {
    Armadura: { src: equipmentIcons["Armaduras"], alt: "Armadura" },
    Poção: { src: equipmentIcons["Poção"], alt: "Poção" },
    Arma: { src: equipmentIcons["Armas"], alt: "Arma" },
    Ferramenta: { src: equipmentIcons["Ferramentas"], alt: "Ferramenta" },
    Aventura: { src: equipmentIcons["Aventura"], alt: "Aventura" },
    Montaria: { src: equipmentIcons["Montaria"], alt: "Montaria" },
    Acessório: { src: equipmentIcons["Acessório"], alt: "Acessório" },
  };

  if (name.toLowerCase().includes("armadura")) {
    return categoryToIconMap["Armadura"];
  }
  if (name.toLowerCase().includes("poção")) {
    return categoryToIconMap["Poção"];
  }

  for (const [key, value] of Object.entries(categoryToIconMap)) {
    if (category.includes(key)) {
      return value;
    }
  }

  return { src: "", alt: "" };
};
