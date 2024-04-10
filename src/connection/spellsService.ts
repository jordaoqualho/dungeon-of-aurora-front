import { backend } from "@/config";
import { ResponseAxios, SpellType } from "@/types";

class SpellsService {
  async get(): Promise<SpellType[]> {
    const response = await backend.get<ResponseAxios<SpellType[]>>(`/spell`);
    return response.data.data;
  }
}

export const spellsService = new SpellsService();
