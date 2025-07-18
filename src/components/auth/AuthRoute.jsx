import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  // user real data

  const isAuth = true;

  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};
