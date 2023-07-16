import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import darkTheme from "../styles/darkTheme";
import GlobalStyle from "../styles/globalStyle";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle theme={darkTheme} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
