import { Feature } from "@/components/atoms";
import { Character, Class, FeatureType } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { ClassInfo, Container } from "./styles";

type ClassCharacteristicsProps = {
  setCharacter: (value: Character) => void;
  character: Character;
  title: string;
  charClass?: Class;
  classFeatures: FeatureType[];
};

export const ClassCharacteristics = (props: ClassCharacteristicsProps) => {
  const { title, charClass, classFeatures, character } = props;
  const [isOpen, setIsOpen] = useState(true);

  if (!charClass) return <></>;

  return (
    <Container $isOpen={isOpen}>
      <button className="title flex_ccr" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <KeyboardArrowDownRoundedIcon className="menu_icon" />
      </button>
      <div className="class_container">
        <ClassInfo>
          <div className="info">
            <div className="title flex_csb">
              <h4>Proficiências</h4>
              <div className="level">Nv. 1</div>
            </div>
            <p>
              <b>Pode usar</b> {charClass.proficiencies.join(", ")}
            </p>
            <p>
              <b>Pode escolher duas: </b>{" "}
              {charClass.proficiencyChoices[0].options.join(", ")}
            </p>
            <p>
              <b>Salvaguarda: </b> {charClass.savingThrows.join(", ")}
            </p>
          </div>
        </ClassInfo>
        {classFeatures.map((feature) => (
          <Feature key={feature._id} feature={feature} character={character} />
        ))}
      </div>
    </Container>
  );
};
