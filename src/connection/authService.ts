import { backend } from '@/config';
import { AuthInterface } from '@/interfaces';
import { LoginData } from '@/types';

class AuthService implements AuthInterface {
  async login(login: LoginData): Promise<void> {
    await backend.post(`/auth/login`, 
    {password: login.password, email: login.user});
  }
}

const authService: AuthInterface = new AuthService();
export default authService;
