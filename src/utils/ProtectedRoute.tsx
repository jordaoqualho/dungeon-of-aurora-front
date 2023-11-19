import { User, defaultUser } from "@/types";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

type ProtectedRouteProps = {
  children: JSX.Element;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user] = useLocalStorage<User>("user", defaultUser);

  if (!user?.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
