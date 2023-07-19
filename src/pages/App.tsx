import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { AppContainer } from "@/pages/App.styles";
import darkTheme from "@/styles/darkTheme";
import GlobalStyle from "@/styles/global.styles";

import NotFound from "@/pages/errors/NotFound";
import Home from "@/pages/home/Index";
import Login from "@/pages/login/Index";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer style={{ fontSize: "1.6rem" }} theme="dark" />
      <GlobalStyle theme={darkTheme} />
      <AppContainer className="flex_ssr">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<NotFound />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}
