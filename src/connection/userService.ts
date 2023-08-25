import { ServiceInterface } from '@/interfaces';
import { User } from '@/types';
import { backend } from '@/config';

class UserService implements ServiceInterface {
  async post(data: User): Promise<void> {
    try {
      await backend.post(`/user`, data);
    } catch (error: unknown) {
      console.log('📌  error → ', error);    }
  }

  async get(): Promise<void> {
    try {
      await backend.get(`/user`);
    } catch (error) {
      console.log('📌  error → ', error);
    }
  }
}

const userService: ServiceInterface = new UserService();
export default userService;
