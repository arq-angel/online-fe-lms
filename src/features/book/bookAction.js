import { postNewBookApi, adminFetchAllBookApi } from "./bookAPI.js";
import { setBooks } from "./bookSlice.js";

export const postNewBookAction = async (payload) => {
  const response = await postNewBookApi(payload);
  return response;
};

export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookApi();
  status === "success" && dispatch(setBooks(payload));
};
