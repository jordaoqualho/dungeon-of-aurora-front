export type LoginData = {
  email: string;
  password: string;
};
export type SignUpData = {
  name: string;
  password: string;
  passwordRepeat: string;
  email: string;
};

export type LoginError = {
  email: boolean;
  password: boolean;
};

export type SignUpError = {
  name: boolean;
  password: boolean;
  passwordRepeat: boolean;
  email: boolean;
};
