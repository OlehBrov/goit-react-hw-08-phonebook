import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthorized)
  return isAuthenticated ? children : <Navigate to="/welcome" />;
};