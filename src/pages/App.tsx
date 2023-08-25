import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { AppContainer } from "@/pages/App.styles"
import darkTheme from "@/styles/darkTheme"
import GlobalStyle from "@/styles/global.styles"

import { env } from "@/config"
import Routes from "@/routes"
import { GoogleOAuthProvider } from "@react-oauth/google"

export default function App() {
  return (
    <GoogleOAuthProvider clientId={env.google_client_id}>
      <ToastContainer />
      <GlobalStyle theme={darkTheme} />
      <AppContainer className="flex_ssr">
        <Routes />
      </AppContainer>
    </GoogleOAuthProvider>
  )
}
