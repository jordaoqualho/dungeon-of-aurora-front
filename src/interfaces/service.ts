import { LoginData, LoginResponse, User } from "@/types";

export interface ServiceInterface {
  get(): Promise<void>;
  post(data: User): Promise<User>;
  getByEmail(email: string): Promise<User>;
}

export interface AuthInterface {
  login(data: LoginData): Promise<LoginResponse>;
}
