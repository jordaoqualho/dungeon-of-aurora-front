import {
  ClassCharacteristics,
  SubClassCharacteristics,
} from "@/components/molecules";
import { classService } from "@/connection";
import { featureService } from "@/connection/featureService";
import { Character, Class, FeatureType } from "@/types";
import { useEffect, useState } from "react";

type CharacteristicsProps = {
  character: Character;
  activeMenu: string;
};

export function Characteristics(props: CharacteristicsProps) {
  const { activeMenu, character } = props;
  const [charClass, setCharClass] = useState<Class>();
  const [classFeatures, setClassFeatures] = useState<FeatureType[]>([]);
  const [subClassFeatures, setSubClassFeatures] = useState<FeatureType[]>([]);

  useEffect(() => {
    classService
      .search(character.class)
      .then((response) => {
        setCharClass(response[0]);
      })
      .catch((error) => console.error(error));

    featureService
      .search({ class: character.class })
      .then((allFeatures) => {
        const sortedFeatures = allFeatures.sort((a, b) => a.level - b.level);
        const classFeatures = sortedFeatures.filter((feat) => !feat?.subClass);
        const subClassFeatures = sortedFeatures.filter(
          (feat) => feat?.subClass
        );
        setClassFeatures(classFeatures);
        setSubClassFeatures(subClassFeatures);
      })
      .catch((error) => console.error(error));
  }, [character]);

  if (activeMenu !== "Characteristics") return <></>;

  return (
    <>
      <ClassCharacteristics
        character={character}
        title={charClass?.name || "Classe"}
        charClass={charClass}
        classFeatures={classFeatures}
      />
      <SubClassCharacteristics
        character={character}
        title={"Sub Classe"}
        subClassFeatures={subClassFeatures}
      />
    </>
  );
}
