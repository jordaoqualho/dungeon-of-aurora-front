import { User } from ".";

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  user: User;
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

export type GoogleResponse = {
  data: {
    email: string;
    name: string;
    picture: string;
  };
};

export type GoogleCredentials = {
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    email: string;
    email_verified: boolean;
    nbf: number;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    locale: string;
    iat: number;
    exp: number;
    jti: string;
};