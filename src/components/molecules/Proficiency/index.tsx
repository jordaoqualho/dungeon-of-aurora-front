import { Skill } from "@/components";
import { skills } from "@/constants";
import { Character } from "@/types";
import { getProficiencyBonus } from "@/utils";
import { Container } from "./styles";

type ProficiencyProps = {
  character: Character;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
};

export const Proficiency = (props: ProficiencyProps) => {
  const { character, setCharacter, isEditing } = props;
  const proficiency = parseInt(getProficiencyBonus(character.level));

  return (
    <Container className="flex_ccc">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          name={skill.name}
          attribute={skill.attribute}
          character={character}
          setCharacter={setCharacter}
          proficiency={proficiency}
          isEditing={isEditing}
        />
      ))}
    </Container>
  );
};
