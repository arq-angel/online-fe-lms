import { apiProcessor } from "../../services/api.js";
const apiBaseUrl = import.meta.env.VITE_API_URL;
const borrowApiEP = apiBaseUrl + "/api/v1/borrows";

// call apiProcessor to fetch the borrow
export const postBorrowApi = async (payload) => {
  const obj = {
    url: borrowApiEP,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
