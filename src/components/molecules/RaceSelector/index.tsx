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
    "Anão da Montanha",
    "Anão Cinzento",
    "Draconato",
    "Drow",
    "Elfo da Floresta",
    "Elfo Noturno",
    "Genasi",
    "Gnomo",
    "Goliath",
    "Halfling",
    "Humano",
    "Meio-Elfo",
    "Meio-Orc",
    "Tabaxi",
    "Tiefling",
    "Tritão",
    "Tortle",
    "Sátiro",
    "Shifter",
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
