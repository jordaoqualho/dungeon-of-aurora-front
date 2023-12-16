/* eslint-disable @typescript-eslint/no-misused-promises */
import { showPromiseToast } from "@/providers";
import { Character } from "@/types";
import { calculateModifier, getAbilityScoreModifier } from "@/utils";
import { Checkbox } from "..";
import { Container } from "./styles";

type SkillProps = {
  name: string;
  attribute: string;
  character: Character;
  proficiency: number;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export function Skill({
  name,
  attribute,
  character,
  proficiency,
  setCharacter,
  isEditing,
}: SkillProps) {
  const { attributes: charAttributes, skills: charSkills } = character;
  const isProficient = charSkills.includes(name);
  const abilityScoreModifier = getAbilityScoreModifier(
    attribute,
    charAttributes
  );

  const toggleSkill = async (): Promise<void> => {
    if (!isEditing) {
      const roll: number = Math.floor(Math.random() * 20) + 1;

      const modifierSign: string = abilityScoreModifier >= 0 ? "+" : "-";
      const formattedModifier = `${modifierSign} ${Math.abs(
        abilityScoreModifier
      )}`;

      let total: number, text: string;

      if (isProficient) {
        const totalWithProficiency: number =
          roll + proficiency + abilityScoreModifier;
        const modifierAndProficiency: number =
          proficiency + abilityScoreModifier;
        text = `${roll} + ${modifierAndProficiency}`;
        total = totalWithProficiency;
      } else {
        text = `${roll} ${formattedModifier}`;
        total = roll + abilityScoreModifier;
      }

      await showPromiseToast(`Rolou ${total} (${text}) em ${name}`, "success");
      return;
    }

    const updatedSkills = isProficient
      ? charSkills.filter((skill: string) => skill !== name)
      : [...charSkills, name];

    setCharacter({ ...character, skills: updatedSkills });
  };

  return (
    <Container
      className={`prof flex_csb ${isEditing ? "editing" : ""}`}
      $isProficient={isProficient}
      onClick={() => toggleSkill()}
    >
      <Checkbox checked={isProficient} />
      <p className="type">{attribute}</p>
      <div className="skill">{name}</div>
      <div className="bonus flex_ccc">
        <p>
          {calculateModifier(isProficient, abilityScoreModifier, proficiency)}
        </p>
      </div>
    </Container>
  );
}
