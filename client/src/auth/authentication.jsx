import { Navigate } from "react-router-dom";


const isAuthenticated = () => {
  const token = sessionStorage.getItem("token");
  return token !== null && token !== undefined;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;