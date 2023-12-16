import { ReactNode } from "react";
import { ActionProvider } from ".";

export const AppProviders: React.FC<{ children: ReactNode }> = ({
  children,
}) => <ActionProvider>{children}</ActionProvider>;
