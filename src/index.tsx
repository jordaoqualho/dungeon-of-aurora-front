import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

import { AppContainer } from "@/styles/app.styles";
import darkTheme from "@/styles/darkTheme";
import GlobalStyle from "@/styles/global.styles";

import { env } from "@/config";
import Routes from "@/routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyledToast } from "./styles/toast.styes";

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={env.google_client_id}>
        <StyledToast />
        <GlobalStyle theme={darkTheme} />
        <AppContainer className="flex_ssr">
          <Routes />
        </AppContainer>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
