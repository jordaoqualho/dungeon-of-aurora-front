export function calculateProficiencyBonus(level: number) : string{
  const proficiency = "+" + Math.ceil(1 + level / 4).toString();
  return proficiency;
}

export function calculateAbilityModifier(abilityScore: number): string {
  const modifierValue = Math.floor((abilityScore - 10) / 2);

  if (modifierValue === 0) {
    return `${modifierValue}`;
  }

  return modifierValue > 0 ? `+${modifierValue}` : `${modifierValue}`;
}

