import { Selector } from "@/components";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Container } from "./styles";

type LevelSelectorProps = {
  isOpen: boolean;
  setSelection: (value: number) => void;
};

export const LevelSelector = ({ isOpen, setSelection }: LevelSelectorProps) => {
  const levels = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <Selector isOpen={isOpen}>
      <Container className="flex">
        {levels.map((levelNumber, index) => (
          <div
            key={index}
            className="option flex_csr"
            onClick={() => setSelection(levelNumber)}
          >
            <div className="icon flex_ccc">
              <BlurOnIcon />
            </div>
            <p className="text">Nível {levelNumber} </p>
          </div>
        ))}
      </Container>
    </Selector>
  );
};
