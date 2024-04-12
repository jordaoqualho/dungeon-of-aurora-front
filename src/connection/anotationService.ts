import { backend } from "@/config";
import { AnotationInterface } from "@/interfaces";
import { AnotationType, ResponseAxios } from "@/types";

class AnotationService implements AnotationInterface {
  async get(): Promise<AnotationType[]> {
    const response = await backend.get<ResponseAxios<AnotationType[]>>(
      `/anotation`
    );
    return response.data.data;
  }

  async getByCharacterId(characterId: string): Promise<AnotationType[]> {
    const response = await backend.get<ResponseAxios<AnotationType[]>>(
      `/anotation/character/${characterId}`
    );
    return response.data.data;
  }

  async post(anotation: Partial<AnotationType>): Promise<AnotationType> {
    const response = await backend.post<ResponseAxios<AnotationType>>(
      `/anotation`,
      anotation
    );
    return response.data.data;
  }

  async put(anotation: AnotationType): Promise<AnotationType> {
    if (!anotation._id) throw new Error("No id for the anotation");
    
    const response = await backend.put<ResponseAxios<AnotationType>>(
      `/anotation/${anotation._id}`,
      anotation
    );
    return response.data.data;
  }

  async delete(anotationId: string): Promise<AnotationType> {
    const response = await backend.delete<ResponseAxios<AnotationType>>(
      `/anotation/${anotationId}`
    );
    return response.data.data;
  }
}

export const anotationService: AnotationInterface = new AnotationService();
