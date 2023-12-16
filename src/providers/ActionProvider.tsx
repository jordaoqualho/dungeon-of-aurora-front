/* eslint-disable @typescript-eslint/no-misused-promises */
import { characterService } from "@/connection";
import { ActionContext, ActionPayload } from "@/contexts/actions";
import React, { ReactNode } from "react";

export const ActionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatchAction = async ({ action, content }: ActionPayload) => {
    try {
      switch (action) {
        case "saveCharacter":
          await characterService.put(content);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <ActionContext.Provider value={{ dispatchAction }}>
      {children}
    </ActionContext.Provider>
  );
};
