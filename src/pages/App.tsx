import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { AppContainer } from "@/pages/App.styles";
import darkTheme from "@/styles/darkTheme";
import GlobalStyle from "@/styles/global.styles";

import config from "@/config";
import Routes from "@/routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  return (
    <GoogleOAuthProvider clientId={config.google_client_id}>
      <ThemeProvider theme={darkTheme}>
        <ToastContainer style={{ fontSize: "1.6rem" }} theme="dark" />
        <GlobalStyle theme={darkTheme} />
        <AppContainer className="flex_ssr">
          <Routes />
        </AppContainer>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
