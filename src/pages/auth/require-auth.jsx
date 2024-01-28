import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ currentUser, children }) => {
  const location = useLocation();
  const isAuth = Boolean(currentUser);

  if (isAuth) {
    return children;
  }
  return <Navigate to="/auth" state={{ path: location.pathname }} replace />;
};
