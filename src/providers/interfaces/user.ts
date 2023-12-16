import { User } from "@/types";

export interface UserInterface {
  get(): Promise<void>;
  post(data: User): Promise<User>;
  getByEmail(email: string): Promise<User>;
}
