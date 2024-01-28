import { fetchRequest } from "shared/api/fetch-request";

export const fetchAuth = () => fetchRequest({ url: "/api/v2/login" });
