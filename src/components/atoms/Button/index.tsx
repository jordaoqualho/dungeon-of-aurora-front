import { Container, Loader } from "./styles";

type IconType = {
  src: string;
  alt: string;
};

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: IconType;
  style?: React.CSSProperties;
  loading?: boolean;
  text: string;
};

export function Button(props: ButtonProps) {
  const { onClick, type = "button", style, text, loading, icon } = props;
  return (
    <Container>
      <button onClick={onClick} type={type} style={style} className="flex_ccr">
        {icon && !loading && <img src={icon.src} alt={icon.alt} />}
        {loading ? <Loader /> : text || "Salvar"}
      </button>
    </Container>
  );
}
