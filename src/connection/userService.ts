import { backend } from '@/config';
import { ServiceInterface } from '@/interfaces';
import { User } from '@/types';

class UserService implements ServiceInterface {
  async post(data: User): Promise<void> {
      return await backend.post(`/user`, data);
  }

  async get(): Promise<void> {
      return await backend.get(`/user`);
  }
}

export const userService: ServiceInterface = new UserService();
