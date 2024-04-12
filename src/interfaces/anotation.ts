import { AnotationType } from "@/types";

export interface AnotationInterface {
  get(): Promise<AnotationType[]>;
  getByCharacterId(characterId: string): Promise<AnotationType[]>;
  post(data: Partial<AnotationType>): Promise<AnotationType>;
  put(data: AnotationType): Promise<AnotationType>;
  delete(anotationId: string): Promise<AnotationType>;
}
