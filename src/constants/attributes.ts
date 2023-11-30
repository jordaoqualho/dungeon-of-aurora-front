import { Character } from "@/types";

interface AttributeMapper {
  [key: string]: keyof Character["attributes"];
}

export const attributeMap: AttributeMapper = {
  DES: "dexterity",
  FOR: "strength",
  CON: "constitution",
  INT: "intelligence",
  SAB: "wisdom",
  CAR: "charisma",
};
