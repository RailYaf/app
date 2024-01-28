import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { SwitchTheme } from "features/theme/switch-theme";
import { AuthForm } from "features/auth/auth-form";

import "./styles.scss";

export const AuthPage = ({ currentUser }) => {
  const location = useLocation();
  const isAuth = Boolean(currentUser);

  if (isAuth) {
    return <Navigate to="/" state={{ path: location.pathname }} replace />;
  }

  return (
    <div className="auth_page">
      <div className="auth_page-left_side"></div>
      <div className="auth_page-right_side">
        <div className="auth_page-right_side__switch">
          <SwitchTheme />
        </div>
        <div className="auth_page-right_side__logo"></div>
        <div className="auth_page-container">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
