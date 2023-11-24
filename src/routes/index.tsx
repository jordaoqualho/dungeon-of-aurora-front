import { Character, Entry, NotFound } from "@/components";
import { ProtectedRoute } from "@/utils";
import {
  BrowserRouter,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<Entry />} />
        <Route
          path="/character"
          element={
            <ProtectedRoute>
              <Character />
            </ProtectedRoute>
          }
        />
        <Route element={<NotFound />} />
      </RoutesContainer>
    </BrowserRouter>
  );
}
