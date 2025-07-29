import { apiProcessor } from "@services/api.js";
const apiBaseUrl = import.meta.env.VITE_API_URL;
const bookApiEP = apiBaseUrl + "/api/v1/books";

export const postNewBookApi = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};

// for admin
export const adminFetchAllBookApi = async () => {
  const obj = {
    url: bookApiEP + "/admin",
    method: "get",
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

// for public
export const fetchAllPublicBookApi = async () => {
  const obj = {
    url: bookApiEP,
    method: "get",
  };
  const result = await apiProcessor(obj);
  return result;
};

// for public
export const fetchSinglePublicBookApi = async (slug) => {
  const obj = {
    url: bookApiEP + `/public/${slug}`,
    method: "get",
  };
  const result = await apiProcessor(obj);
  return result;
};

export const updateBookApi = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "put",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};

export const deleteBookApi = async (_id) => {
  const obj = {
    url: bookApiEP + "/" + _id,
    method: "delete",
    showToast: true,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
