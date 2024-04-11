import { Anotation } from "@/types";

export interface AnotationInterface {
  get(): Promise<Anotation[]>;
  getByCharacterId(characterId: string): Promise<Anotation[]>;
  post(data: Partial<Anotation>): Promise<Anotation>;
  put(data: Anotation): Promise<Anotation>;
}
