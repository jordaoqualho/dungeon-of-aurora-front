export type EquipmentType = {
  _id: string;
  name: string;
  originalName: string;
  cost: Cost;
  category: string;
  description?: string[];
  special?: string[];
  properties?: string[];
  weight?: number;
  minimumStrength?: number;
  contents?: Content[];
  quantity?: number;
  stealthDisadvantage?: boolean;
  armorCategory?: string;
  categoryRange?: string;
  weaponRange?: string;
  weaponCategory?: string;
  vehicleCategory?: string;
  toolCategory?: string;
  capacity?: string;
  armorClass?: ArmorClass;
  range?: Range;
  throwRange?: Range;
  speed?: Speed;
  damage?: EquipmentDamage;
  twoHandedDamage?: EquipmentDamage;
};

type Range = {
  normal: number;
  long?: number;
};

type Content = {
  item: string;
  quantity: number;
};

export type ArmorClass = {
  base: number;
  dex_bonus: boolean;
  max_bonus?: number;
};

type Speed = {
  unit: string;
  quantity: number;
};

type Cost = {
  quantity: string;
  unit: Pieces;
};

export enum Pieces {
  PECAS_DE_COBRE = "pc",
  PECAS_DE_PRATA = "pp",
  PECAS_DE_ELECTRUM = "pe",
  PECAS_DE_OURO = "po",
  PECAS_DE_PLATINA = "pl",
}

type EquipmentDamage = {
  type: DamageTypes;
  dice: DiceRolls;
};

type DiceRolls = {
  quantity: number;
  type: string;
};

export enum DamageTypes {
  ÁCIDO = "Ácido",
  CONTUNDENTE = "Contundente",
  FRIO = "Frio",
  FOGO = "Fogo",
  FORÇA = "Força",
  ELÉTRICO = "Elétrico",
  NECRÓTICO = "Necrótico",
  PERFURANTE = "Perfurante",
  VENENO = "Veneno",
  PSÍQUICO = "Psíquico",
  RADIANTE = "Radiante",
  CORTANTE = "Cortante",
  TROVÃO = "Trovão",
}
