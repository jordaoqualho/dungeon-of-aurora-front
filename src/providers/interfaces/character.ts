import { Character } from "@/types";

export interface CharacterInterface {
  get(): Promise<Character[]>;
  getByUserId(userId: string): Promise<Character[]>;
  post(data: Partial<Character>): Promise<Character>;
  put(data: Character): Promise<Character>;
}