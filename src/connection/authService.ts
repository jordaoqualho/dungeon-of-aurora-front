import { backend } from '@/config';
import { AuthInterface } from '@/interfaces';
import { LoginData } from '@/types';

class AuthService implements AuthInterface {

  async login({password, email}: LoginData): Promise<void> {
    return await backend.post(`/auth/login`, 
    {password, email});
  }

}

export const authService: AuthInterface = new AuthService();
