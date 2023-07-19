export default interface Theme {
  title: string;
  font: {
    family: string;
    micro: string;
    small: string;
    medium: string;
    large: string;
    big: string;
    huge: string;
    subtitle: string;
    title: string;
  };
  color: {
    primary: string;
    secundary: string;
    background: string;
    error: string;
    warning: string;
    complete: string;
    border: string;
    transparency: string;
  };
  gradient: {
    priGrad: string;
    secGrad: string;
    bacGrad: string;
  };
  text: {
    basic: string;
    contrast: string;
    bright: string;
  };
  shadow: {
    basic: string;
    dark: string;
    normal: string;
  };
  transition: {
    fast: string;
    normal: string;
    slow: string;
  };
}
