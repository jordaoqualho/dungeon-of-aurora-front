export type SignInData = {
  user: string;
  password: string;
};
export type SignUpData = {
  user: string;
  password: string;
  passwordRepeat: string;
  email: string;
};

export type SignInError = {
  user: boolean;
  password: boolean;
};

export type SignUpError = {
  user: boolean;
  password: boolean;
  passwordRepeat: boolean;
  email: boolean;
};
