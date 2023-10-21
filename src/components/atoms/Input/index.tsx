import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import { Container } from "./styles";

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoFocus?: boolean;
  type?: string;
  name: string;
  inputError: boolean;
  value: string;
};

export function Input(props: InputProps) {
  const { placeholder, name, type = "text", autoFocus = false, onChange, inputError = false, value } = props;

  return (
    <Container title="input" $error={inputError}>
      {type === "text" ? <AccountCircleIcon className="icon" /> : <HttpsIcon className="icon" />}
      <input
        type={type}
        placeholder={placeholder}
        className="user"
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
        name={name}
      />
    </Container>
  );
}
