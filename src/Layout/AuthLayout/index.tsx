import React from "react";
import { Outlet } from "react-router";
import { AuthLayoutContainer } from "./styles";

const AuthLayout: React.FC = () => {
  return (
    <AuthLayoutContainer>
      <Outlet />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
