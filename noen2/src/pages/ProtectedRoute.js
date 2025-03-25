import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  console.log("ProtectedRoute reached:", user); // Debugging log

  return user ? children : <Navigate to="/signIn" replace />;
};

export default ProtectedRoute;
