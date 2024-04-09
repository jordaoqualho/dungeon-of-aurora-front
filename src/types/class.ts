export type Class = {
  _id: string;
  name: string;
  originalName: string;
  hitDice: number;
  proficiencyChoices: ProficiencyChoices[];
  proficiencies: string[];
  savingThrows: string[];
  startingEquipment: StartingEquipment[];
  startingEquipmentOptions: string[];
  subClasses: string[];
};

type StartingEquipment = {
  name: string;
  quantity: number;
};

type ProficiencyChoices = {
  type: string;
  choose: number;
  description: string;
  options: string[];
};
