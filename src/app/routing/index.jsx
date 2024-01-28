import React from "react";
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";

import { BaseLayout } from "app/layouts/baseLayout";
import {
  AuthPage,
  HomePage,
  NotFoundPage,
  RequireAuth,
  UsersPage,
} from "pages";
import { fetchAuth } from "entities/auth";

const Routing = () => {
  const { data, isLoading } = useQuery({
    queryFn: fetchAuth,
    queryKey: "auth",
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth currentUser={data}>
            <BaseLayout isLoading={isLoading} />
          </RequireAuth>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/auth" element={<AuthPage currentUser={data} />} />
    </Routes>
  );
};

export default Routing;
