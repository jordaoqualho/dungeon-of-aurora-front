import { backend } from "@/config";
import { CharacterInterface } from "@/interfaces";
import { Character, ResponseAxios } from "@/types";

class CharacterService implements CharacterInterface {
  async get(): Promise<Character[]> {
    const response = await backend.get<ResponseAxios<Character[]>>(
      `/character`
    );
    return response.data.data;
  }

  async getByUserId(userId: string): Promise<Character[]> {
    const response = await backend.get<ResponseAxios<Character[]>>(
      `/character/user/${userId}`
    );
    return response.data.data;
  }

  async post(data: Partial<Character>): Promise<Character> {
    const response = await backend.post<ResponseAxios<Character>>(
      `/character`,
      data
    );
    return response.data.data;
  }

  async put(data: Character): Promise<Character> {
    const response = await backend.put<ResponseAxios<Character>>(
      `/character/${data._id}`,
      data
    );
    return response.data.data;
  }
}

export const characterService: CharacterInterface = new CharacterService();
