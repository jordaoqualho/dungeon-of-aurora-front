import { LoginData, LoginResponse } from "@/types";

export interface AuthInterface {
  login(data: LoginData): Promise<LoginResponse>;
}
