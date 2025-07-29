import {
  postNewBookApi,
  adminFetchAllBookApi,
  fetchAllPublicBookApi,
  fetchSinglePublicBookApi,
} from "./bookAPI.js";
import { setBooks, setPublicBooks, setSelectedBook } from "./bookSlice.js";

export const postNewBookAction = async (payload) => {
  const response = await postNewBookApi(payload);
  return response;
};

export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookApi();
  status === "success" && dispatch(setBooks(payload));
};

export const fetchAllPublicBookAction = () => async (dispatch) => {
  const { status, payload } = await fetchAllPublicBookApi();
  status === "success" && dispatch(setPublicBooks(payload));
};

export const fetchSinglePublicBookAction = (slug) => async (dispatch) => {
  const { status, payload } = await fetchSinglePublicBookApi(slug);
  status === "success" && dispatch(setSelectedBook(payload));
};
