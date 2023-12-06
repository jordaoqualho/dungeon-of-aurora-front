export default interface Theme {
  title: string;
  font: {
    main: string;
    second: string;
    micro: string;
    small: string;
    medium: string;
    large: string;
    big: string;
    huge: string;
    subtitle: string;
    title: string;
    thin: number;
    extraLight: number;
    light: number;
    normal: number;
    semiBold: number;
    bold: number;
    extraBold: number;
  };
  color: {
    primary: string;
    secundary: string;
    background: string;
    error: string;
    warning: string;
    success: string;
    border: string;
    ground: string;
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
