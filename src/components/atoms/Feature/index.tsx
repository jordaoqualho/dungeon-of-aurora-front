import { Character, FeatureType } from "@/types";
import React from "react";
import { Container } from "./styles";

type FeatureProps = {
  feature: FeatureType;
  character: Character;
};

export function Feature(props: FeatureProps) {
  const { feature, character } = props;
  const isLocked = character.level < feature.level;

  if (!feature) return <></>;

  const renderFeatureDescription = (description: string[]) => {
    if (!Array.isArray(description)) {
      return <p>{description}</p>;
    }

    const sections = description.map((section, index) => {
      const lines = section.split("\n");

      const formattedLines = lines.map((line, idx) => {
        const parts = line.split(/\*{2,}/g);

        const formattedParts = parts.map((part, partIndex) => {
          return partIndex % 2 === 0 ? (
            <React.Fragment key={partIndex}>{part}</React.Fragment>
          ) : (
            <>
              <br />
              <strong key={partIndex}>{part}</strong>
            </>
          );
        });

        return (
          <React.Fragment key={idx}>
            {formattedParts}
            <br />
          </React.Fragment>
        );
      });

      return <React.Fragment key={index}>{formattedLines}</React.Fragment>;
    });

    return <p>{sections}</p>;
  };

  return (
    <Container>
      <div className="info">
        <div className="title flex_csb">
          <h4>{feature.name}</h4>
          <div className={`level ${isLocked ? "locked" : ""}`}>
            Nv. {feature.level}
          </div>
        </div>
        <p>{renderFeatureDescription(feature.description)}</p>
      </div>
    </Container>
  );
}
