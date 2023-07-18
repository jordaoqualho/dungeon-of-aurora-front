import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import { Container } from "./InputStyle";

type InputProps = {
  placeholder: string;
  autoFocus?: boolean;
  type?: string;
};

export default function Input(props: InputProps) {
  const { placeholder, type = "text", autoFocus = false } = props;

  return (
    <Container title="input">
      {type === "text" ? <AccountCircleIcon className="icon" /> : <HttpsIcon className="icon" />}
      <input type={type} placeholder={placeholder} className="user" autoFocus={autoFocus} />
    </Container>
  );
}
