import { characterService } from "@/connection";
import { ActionContext, ActionPayload } from "@/contexts/actions";
import { Character } from "@/types";
import { debounce } from "lodash"; // Import debounce function from lodash
import React, { ReactNode } from "react";

export const ActionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const debouncedSaveCharacter = debounce(async (content: Character) => {
    try {
      await characterService.put(content);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, 3000);

  const dispatchAction = async ({ action, content }: ActionPayload) => {
    try {
      switch (action) {
        case "saveCharacter":
          await debouncedSaveCharacter(content);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <ActionContext.Provider value={{ dispatchAction }}>
      {children}
    </ActionContext.Provider>
  );
};
