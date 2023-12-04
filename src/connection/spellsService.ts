import { backend } from "@/config";
import { ResponseAxios, Spell } from "@/types";

class SpellsService {
  async get(): Promise<Spell[]> {
    const response = await backend.get<ResponseAxios<Spell[]>>(`/spell`);
    return response.data.data;
  }
}

export const spellsService = new SpellsService();
