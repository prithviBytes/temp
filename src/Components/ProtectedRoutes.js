import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ path, ...props }) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
}
