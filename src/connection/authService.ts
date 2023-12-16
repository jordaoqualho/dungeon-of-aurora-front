import { backend } from "@/config";
import { AuthInterface } from "@/providers/interfaces";
import { LoginData, LoginResponse, ResponseAxios } from "@/types";

class AuthService implements AuthInterface {
  async login({ password, email }: LoginData): Promise<LoginResponse> {
    const response = await backend.post<ResponseAxios<LoginResponse>>(`/auth/login`, { password, email });
    return response.data.data;
  }
}

export const authService: AuthInterface = new AuthService();
