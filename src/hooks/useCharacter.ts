import { characterService } from "@/connection";
import { Character } from "@/types";
import { useQuery } from "@tanstack/react-query";

function fetchCharacter(id: string | undefined): Promise<Character[]> {
  return typeof id === 'undefined'
  ? Promise.reject(new Error('Invalid id'))
  : characterService.getByUserId(id)
}

export function useCharacter(id: string | undefined) {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id),
    enabled: Boolean(id),
  })
}