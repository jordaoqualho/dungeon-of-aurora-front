import { Entry, Home, NotFound } from "@/components";
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
