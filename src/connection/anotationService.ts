import { backend } from "@/config";
import { AnotationInterface } from "@/interfaces";
import { Anotation, ResponseAxios } from "@/types";

class AnotationService implements AnotationInterface {
  async get(): Promise<Anotation[]> {
    const response = await backend.get<ResponseAxios<Anotation[]>>(
      `/anotation`
    );
    return response.data.data;
  }

  async getByCharacterId(characterId: string): Promise<Anotation[]> {
    const response = await backend.get<ResponseAxios<Anotation[]>>(
      `/anotation/character/${characterId}`
    );
    return response.data.data;
  }

  async post(data: Partial<Anotation>): Promise<Anotation> {
    const response = await backend.post<ResponseAxios<Anotation>>(
      `/anotation`,
      data
    );
    return response.data.data;
  }

  async put(data: Anotation): Promise<Anotation> {
    const response = await backend.put<ResponseAxios<Anotation>>(
      `/anotation/${data._id}`,
      data
    );
    return response.data.data;
  }
}

export const anotationService: AnotationInterface = new AnotationService();
