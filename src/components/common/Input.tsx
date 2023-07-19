import { Container } from "@/components/common/Input.styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoFocus?: boolean;
  type?: string;
  name: string;
};

export default function Input(props: InputProps) {
  const { placeholder, name, type = "text", autoFocus = false, onChange } = props;

  return (
    <Container title="input">
      {type === "text" ? <AccountCircleIcon className="icon" /> : <HttpsIcon className="icon" />}
      <input
        type={type}
        placeholder={placeholder}
        className="user"
        autoFocus={autoFocus}
        onChange={onChange}
        name={name}
      />
    </Container>
  );
}
