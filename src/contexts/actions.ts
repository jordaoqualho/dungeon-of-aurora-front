import { Character } from "@/types";
import { Dispatch, createContext, useContext } from "react";

export type ActionPayload = {
  action: string;
  content: Character;
};

type ActionContextType = {
  dispatchAction: Dispatch<ActionPayload>;
};

export const ActionContext = createContext<ActionContextType | null>(null);

export const useActionContext = () => useContext(ActionContext);
