import { apiProcessor } from "../../services/api.js";
const apiBaseUrl = import.meta.env.VITE_API_URL;
const userApiEP = apiBaseUrl + "/api/v1/users";

// call apiProcessor to fetch the user
export const fetchUserApi = async () => {
  const obj = {
    url: userApiEP + "/profile",
    method: "get",
    payload: false,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
