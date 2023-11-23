import { Entry, Home, NotFound } from "@/components";
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
              <Home />
            </ProtectedRoute>
          }
        />
        <Route element={<NotFound />} />
      </RoutesContainer>
    </BrowserRouter>
  );
}
