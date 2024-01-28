import { fetchRequest } from "shared/api/fetch-request";

export const loginAuth = async (values) =>
  fetchRequest({
    url: "/api/v2/login",
    options: {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
