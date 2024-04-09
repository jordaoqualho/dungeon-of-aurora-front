import { Character, Class } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { ClassInfo, Container } from "./styles";

type LevelCharacteristicsProps = {
  setCharacter: (value: Character) => void;
  character: Character;
  title: string;
  charClass?: Class;
};

export const ClassCharacteristics = (props: LevelCharacteristicsProps) => {
  const { title, charClass } = props;
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
            <h4>Proficiências</h4>
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
      </div>
    </Container>
  );
};
