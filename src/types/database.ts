export type User = {
  _id?: string;
  name: string;
  password: string;
  email: string;
  avatarUrl?: string;
  totalGamesPlayed?: number;
  quests?: string[];
  inspiration?: number;
};

export const defaultUser = {
  _id: "",
  name: "",
  password: "",
  email: "",
};

