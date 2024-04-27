import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (!user) {
      return <Navigate to='/LogIn' state={location.pathname}></Navigate>;
    }
    return children;
};

export default PrivateRoute;
