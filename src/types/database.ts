export type User = {
  _id?: string;
  name: string;
  password: string;
  email: string;
  avatarUrl?: string;
  totalGamesPlayed?: number;
  quests?: string[];
  inspiration?: number;
  isAuthenticated?: boolean;
};

export const defaultUser = {
  isAuthenticated: false,
  _id: "",
  name: "",
  password: "",
  email: "",
};

