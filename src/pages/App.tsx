import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import darkTheme from "../styles/darkTheme";
import GlobalStyle from "../styles/globalStyle";
import { AppContainer } from "./AppStyles";

import NotFound from "./errors/NotFound";
import Home from "./home/Index";
import Login from "./login/Index";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
