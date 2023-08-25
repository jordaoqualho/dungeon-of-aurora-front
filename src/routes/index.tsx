import Entry from "@/pages/entry/Entry";
import NotFound from "@/pages/errors/NotFound";
import Home from "@/pages/home/Home";
import { BrowserRouter, Route, Routes as RoutesContainer } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
        <Route element={<NotFound />} />
      </RoutesContainer>
    </BrowserRouter>
  );
}
