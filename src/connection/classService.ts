import { backend } from "@/config";
import { Class, ResponseAxios } from "@/types";

class ClassService {
  async get(): Promise<Class[]> {
    const response = await backend.get<ResponseAxios<Class[]>>(`/class`);
    return response.data.data;
  }

  async getById(id: string): Promise<Class[]> {
    const response = await backend.get<ResponseAxios<Class[]>>(`/class/${id}`);
    return response.data.data;
  }

  async search(name: string): Promise<Class[]> {
    const response = await backend.get<ResponseAxios<Class[]>>(
      `/class/search?name=${name}`
    );
    return response.data.data;
  }
}

export const classService = new ClassService();
