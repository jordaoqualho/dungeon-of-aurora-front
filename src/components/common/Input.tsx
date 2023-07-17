import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import { Container } from "./InputStyle";

type InputProps = {
  placeholder: string;
  type?: string;
};

export default function Input(props: InputProps) {
  const { placeholder, type = "text" } = props;

  return (
    <Container title="input">
      {type === "text" ? <AccountCircleIcon className="icon" /> : <HttpsIcon className="icon" />}
      <input type={type} placeholder={placeholder} className="user" />
    </Container>
  );
}
