import axios, { AxiosInstance } from "axios";

export type SpellsResponse = {
  index: string;
  name: string;
  url: string;
};

export type SpellResponse = {
  name: string;
  desc: string;
  higher_level: string;
  range: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  damage: {
    damage_type: {
      index: string;
      name: string;
      url: string;
    };
    damage_at_slot_level: {
      [slotLevel: number]: string;
    };
    damage_at_character_level: {
      [slotLevel: number]: string;
    };
  };
  dc: {
    dc_type: {
      index: string;
      name: string;
      url: string;
    };
    dc_success: string;
  };
  school: {
    index: string;
    name: string;
    url: string;
  };
  classes: Array<{
    index: string;
    name: string;
    url: string;
  }>;
};

export type ResponseAxios<T> = {
  results: T;
  status: number;
  message: string;
};

class SpellsService {
  private backend: AxiosInstance;

  constructor() {
    this.backend = axios.create({
      baseURL: "https://www.dnd5eapi.co/api",
    });
  }

  async get(): Promise<SpellsResponse[]> {
    try {
      const response = await this.backend.get<ResponseAxios<SpellsResponse[]>>(
        "/spells"
      );
      return response.data.results;
    } catch (error) {
      console.log("📌  error → ", error);
      throw new Error("Failed to fetch spells");
    }
  }

  async getById(id: string): Promise<SpellResponse> {
    try {
      const response = await this.backend.get<SpellResponse>(`/spells/${id}`);
      return response.data;
    } catch (error) {
      console.log("📌  error → ", error);
      throw new Error("Failed to fetch spells");
    }
  }
}

export const spellsService = new SpellsService();
