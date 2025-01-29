import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuth";

interface PublicRouteProps {
  element: JSX.Element;
  restricted?: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element, restricted = false }) => {
  const { isAuthenticated } = useAuthContext();

  if (restricted && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PublicRoute;
