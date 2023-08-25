import { LoginData, User } from "@/types";

export interface ServiceInterface {
  post(data: User): Promise<void>;
  get(): Promise<void>;
}

export interface AuthInterface {
  login(data: LoginData): Promise<void>;
}
