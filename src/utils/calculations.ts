import { attributeMap } from "@/constants";

export function getProficiencyBonus(level: number): string {
  const proficiency = "+" + Math.ceil(1 + level / 4).toString();
  return proficiency;
}

export function getAbilityModifier(abilityScore: number): string {
  const modifierValue = Math.floor((abilityScore - 10) / 2);

  if (modifierValue === 0) {
    return `${modifierValue}`;
  }

  return modifierValue > 0 ? `+${modifierValue}` : `${modifierValue}`;
}

export const getAbilityScoreModifier = (
  attribute: string,
  charAttributes: Record<string, number>
): number => {
  const matchedAttribute = attributeMap[attribute] || "dexterity";
  return Number(getAbilityModifier(charAttributes[matchedAttribute]));
};

export const calculateModifier = (
  isProficient: boolean,
  modifier: number,
  proficiency: number
): string => {
  const totalModifier = isProficient ? modifier + proficiency : modifier;
  return totalModifier >= 0 ? `+${totalModifier}` : `${totalModifier}`;
};
