import { backend } from '@/config';
import { ServiceInterface } from '@/interfaces';
import { ResponseAxios, User } from '@/types';

class UserService implements ServiceInterface {
  async post(data: User): Promise<User> {
    const response =  await backend.post<ResponseAxios<User>>(`/user`, data);
    return response.data.data;
  }

  async get(): Promise<void> {
      return await backend.get(`/user`);
  }

  async getByEmail(email: string): Promise<User> {
      const response = await backend.get<ResponseAxios<User>>(`/user/email/${email}`);
      return response.data.data;
  }
}

export const userService: ServiceInterface = new UserService();
