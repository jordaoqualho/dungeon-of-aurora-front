export type User = {
  _id?: string;
  name: string;
  password: string;
  email: string;
  avatarUrl?: string;
  isAuthenticated?: boolean;
};

export const defaultUser = {
  isAuthenticated: false,
  _id: "",
  name: "",
  password: "",
  email: "",
};

