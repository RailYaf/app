import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "widgets/header";
import { UserProfile } from "widgets/user-profile";
import { LinearLoading } from "shared/ui";

export const BaseLayout = ({ isLoading }) => {
  if (isLoading) {
    return <LinearLoading />;
  }
  return (
    <>
      <Header>
        <UserProfile />
      </Header>
      <Outlet />
    </>
  );
};
