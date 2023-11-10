import { Selector } from "@/components";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Container } from "./styles";

type MenuSelectorProps = {
  isOpen: boolean;
  setSelection: (value: string) => void;
};

export const ClassSelector = ({ isOpen, setSelection }: MenuSelectorProps) => {
  const classes = [
    "Bárbaro",
    "Bardo",
    "Bruxo",
    "Clérigo",
    "Druida",
    "Feiticeiro",
    "Guerreiro",
    "Ladino",
    "Mago",
    "Monge",
    "Paladino",
    "Patrulheiro",
  ];

  return (
    <Selector isOpen={isOpen}>
      <Container className="flex">
        {classes.map((classItem, index) => (
          <div key={index} className="option flex_csr" onClick={() => setSelection(classItem)}>
            <div className="icon flex_ccc">
              <BlurOnIcon />
            </div>
            <p className="text">{classItem}</p>
          </div>
        ))}
      </Container>
    </Selector>
  );
};
