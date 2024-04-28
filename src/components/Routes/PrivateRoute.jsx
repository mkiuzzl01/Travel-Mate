import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center"><span className="loading loading-dots loading-lg"></span></div>
  }

  if (!user) {
      return <Navigate to='/LogIn' state={location.pathname}></Navigate>;
    }
    return children;
    
};

export default PrivateRoute;
