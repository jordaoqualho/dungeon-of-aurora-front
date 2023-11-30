/* eslint-disable @typescript-eslint/no-misused-promises */
import { showPromiseToast } from "@/providers";
import { Character } from "@/types";
import { getAbilityModifier } from "@/utils";
import { Checkbox } from "..";
import { attributeMap } from "@/constants/attributes";

type SkillProps = {
  name: string;
  attribute: string;
  character: Character;
  proficiency: number;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export function Skill(props: SkillProps) {
  const { name, attribute, character, proficiency, setCharacter, isEditing } =
    props;
  const { attributes: charAttributes, skills: charSkills } = character;
  const isProficient = charSkills.includes(name);

  const calculateModifier = () => {
    const abilityScoreModifier = parseInt(getAbilityScoreModifier(attribute));

    const modifier = isProficient
      ? abilityScoreModifier + proficiency
      : abilityScoreModifier;

    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  };

  const getAbilityScoreModifier = (attribute: string): string => {
    const matchedAttribute = attributeMap[attribute] || "dexterity";
    return getAbilityModifier(charAttributes[matchedAttribute]);
  };

  const toggleSkill = async () => {
    if (!isEditing) {
      const roll = Math.floor(Math.random() * 20) + 1;
      const total = isProficient ? roll + proficiency : roll;
      await showPromiseToast(`Rolou ${total} em ${name}`, "success");
      return;
    }

    if (isProficient) {
      const updatedSkills = charSkills.filter((skill) => skill !== name);
      setCharacter({ ...character, skills: updatedSkills });
    } else {
      setCharacter({ ...character, skills: [...character.skills, name] });
    }
  };

  return (
    <div
      className={`prof flex_csb ${isEditing ? "editing" : ""}`}
      onClick={() => toggleSkill()}
    >
      <Checkbox checked={isProficient} />
      <p className="type">{attribute}</p>
      <div className="skill">{name}</div>
      <div className="bonus flex_ccc">
        <p>{calculateModifier()}</p>
      </div>
    </div>
  );
}
