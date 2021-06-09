import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
export default function ProtectedRoute({ path, ...props }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
}
