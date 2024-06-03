import { Feature } from "@/components/atoms";
import { Character, FeatureType } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { SubClassDropdown } from "../SubClassDropdown";
import { Container, SubClassSelector } from "./styles";

type SubClassCharacteristicsProps = {
  character: Character;
  title: string;
  subClassFeatures: FeatureType[];
};

export const SubClassCharacteristics = (
  props: SubClassCharacteristicsProps
) => {
  const { title, subClassFeatures, character } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSubClass, setSelectedSubClass] = useState(
    character.subClass || ""
  );

  const uniqueSubClasses = [
    ...new Set(subClassFeatures.map((feat) => feat.subClass)),
  ];

  if (!subClassFeatures) return <></>;

  return (
    <Container $isOpen={isOpen}>
      <button className="title flex_ccr" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <KeyboardArrowDownRoundedIcon className="menu_icon" />
      </button>
      <div className="class_container">
        <SubClassSelector>
          <SubClassDropdown
            uniqueSubClasses={uniqueSubClasses}
            selectedSubClass={selectedSubClass}
            setSelectedSubClass={setSelectedSubClass}
          />
        </SubClassSelector>

        {selectedSubClass !== "" &&
          subClassFeatures
            .filter((feature) => feature.subClass === selectedSubClass)
            .map((feature) => (
              <Feature
                key={feature._id}
                feature={feature}
                character={character}
              />
            ))}
      </div>
    </Container>
  );
};
