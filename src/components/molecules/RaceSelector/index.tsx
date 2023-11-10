import { Selector } from "@/components";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Container } from "./styles";

type MenuSelectorProps = {
  isOpen: boolean;
  setSelection: (value: string) => void;
};

export const RaceSelector = ({ isOpen, setSelection }: MenuSelectorProps) => {
  const races = [
    "Alto Elfo",
    "Anão",
    "Halfling",
    "Humano",
    "Dragonborn",
    "Gnomo",
    "Meio-Elfo",
    "Meio-Orc",
    "Tiefling",
    "Aarakocra",
    "Genasi",
    "Goliath",
    "Kenku",
    "Lizardfolk",
    "Tabaxi",
    "Tritão",
  ];

  return (
    <Selector isOpen={isOpen}>
      <Container className="flex">
        {races.map((race, index) => (
          <div key={index} className="option flex_csr" onClick={() => setSelection(race)}>
            <div className="icon flex_ccc">
              <BlurOnIcon />
            </div>
            <p className="text">{race}</p>
          </div>
        ))}
      </Container>
    </Selector>
  );
};
