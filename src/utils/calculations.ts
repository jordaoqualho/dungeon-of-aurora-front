export function calculateProficiencyBonus(level: number) : string{
  const proficiency = "+" + Math.ceil(1 + level / 4).toString();
  return proficiency;
}

export function calculateAbilityModifier(abilityScore: number): string {
  const modifier = "+" + Math.floor((abilityScore - 10) / 2).toString();
  return modifier;
}