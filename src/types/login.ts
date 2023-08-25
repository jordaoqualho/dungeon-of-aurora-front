export type LoginData = {
  user: string;
  password: string;
};
export type SignUpData = {
  user: string;
  password: string;
  passwordRepeat: string;
  email: string;
};

export type LoginError = {
  user: boolean;
  password: boolean;
};

export type SignUpError = {
  user: boolean;
  password: boolean;
  passwordRepeat: boolean;
  email: boolean;
};
