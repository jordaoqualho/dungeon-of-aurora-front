import {
  adventure_icon,
  armor_icon,
  mount_icon,
  potion_icon,
  ranged_weapon_icon,
  tool_icon,
  valuable_icon,
  weapon_icon,
} from "@/assets";
import { DamageTypes, Equipment, Pieces } from "@/types";

export const initialEquipment: Equipment = {
  _id: "",
  name: "",
  originalName: "",
  cost: { quantity: "0", unit: Pieces.PECAS_DE_COBRE },
  category: "",
  description: [""],
  special: [""],
  properties: [""],
  weight: 0,
  minimumStrength: 0,
  contents: [{ item: "", quantity: 0 }],
  quantity: 0,
  stealthDisadvantage: false,
  armorCategory: "",
  categoryRange: "",
  weaponRange: "",
  weaponCategory: "",
  vehicleCategory: "",
  toolCategory: "",
  capacity: "",
  armorClass: { base: 0, dex_bonus: false },
  range: { normal: 2 },
  throwRange: { normal: 10, long: 20 },
  speed: { unit: "", quantity: 0 },
  damage: { type: DamageTypes.CONTUNDENTE, dice: { quantity: 0, type: "" } },
  twoHandedDamage: {
    type: DamageTypes.CONTUNDENTE,
    dice: { quantity: 0, type: "" },
  },
};

export type EquipmentIconMap = {
  [key: string]: string;
};

export const equipmentIcons: EquipmentIconMap = {
  Poção: potion_icon,
  ArmaADistancia: ranged_weapon_icon,
  Ferramentas: tool_icon,
  Tesouros: valuable_icon,
  Armas: weapon_icon,
  Armaduras: armor_icon,
  Aventura: adventure_icon,
  Montaria: mount_icon,
  default: potion_icon,
};
