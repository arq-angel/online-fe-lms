import { apiProcessor } from "@services/api.js";
const apiBaseUrl = import.meta.env.VITE_API_URL;
const borrowApiEP = apiBaseUrl + "/api/v1/borrows";

// for admin only
export const fetchAllBorrowsApi = async (isAdmin) => {
  const path = isAdmin ? "/admin" : "/user";

  const obj = {
    url: borrowApiEP + path,
    method: "get",
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

// for users
export const patchReturnBorrowApi = async (payload) => {
  const obj = {
    url: borrowApiEP,
    method: "patch",
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
