import { attributeMap } from "@/constants";
import { Damage } from "@/types";

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

export const getSpellDamage = (damage: Damage, level: number) => {
  if (damage.characterLevel) {
    const options = Object.keys(damage.characterLevel);
    const closestLevel = options
      .map(Number)
      .sort((a, b) => a - b)
      .reduce((acc, curr) => (curr <= level ? curr : acc), -1);

    const spellDamage = damage.characterLevel[closestLevel];
    const [spellDice, adition] = spellDamage.dice
      .split("+")
      .map((string) => string.trim());

    const actualDamage = { dice: spellDice, quantity: spellDamage.quantity };
    const damageText = `${spellDamage.quantity}${spellDamage.dice}`;
    const damageAdition = adition ? parseInt(adition) : 0;

    return { options, actualDamage, damageText, damageAdition };
  }

  const spellDamage = damage.slotLevel[level];
  const [spellDice, adition] = spellDamage.dice
    .split("+")
    .map((string) => string.trim());
  const damageText = `${spellDamage.quantity}${spellDamage.dice}`;
  const actualDamage = { dice: spellDice, quantity: spellDamage.quantity };
  const damageAdition = adition ? parseInt(adition) : 0;

  return { actualDamage, damageAdition, damageText };
};