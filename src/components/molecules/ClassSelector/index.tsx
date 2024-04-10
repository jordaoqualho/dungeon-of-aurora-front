import { Selector } from "@/components";
import { classService } from "@/connection";
import { Class } from "@/types";
import { DiceType } from "@/utils";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { useEffect, useState } from "react";
import { Container } from "./styles";

type ClassSelectorProps = {
  isOpen: boolean;
  setSelection: (className: string, hitDice: DiceType) => void;
};

export const ClassSelector = ({ isOpen, setSelection }: ClassSelectorProps) => {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    classService
      .get()
      .then((allClasses: Class[]) => {
        setClasses(allClasses);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Selector isOpen={isOpen}>
      <Container className="flex">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="option flex_csr"
            onClick={() => {
              console.log(`d${cls.hitDice}`);
              setSelection(cls.name, `d${cls.hitDice}` as DiceType);
            }}
          >
            <div className="icon flex_ccc">
              <BlurOnIcon />
            </div>
            <p className="text">{cls.name}</p>
          </div>
        ))}
      </Container>
    </Selector>
  );
};

export default ClassSelector;
