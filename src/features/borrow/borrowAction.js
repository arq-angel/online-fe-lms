import { fetchAllBorrowsApi, patchReturnBorrowApi } from "./borrowAPI.js";
import { setAllBorrow, setMyBorrow } from "./borrowSlice.js";
import { toast } from "react-toastify";

export const getAllBorrowsAction = (isAdmin) => async (dispatch) => {
  // call api
  const { status, payload } = await fetchAllBorrowsApi(isAdmin);
  status === "success" &&
    (isAdmin
      ? dispatch(setAllBorrow(payload))
      : dispatch(setMyBorrow(payload)));
};

export const returnBorrowAction = (payload) => async (dispatch) => {
  // call api
  const pending = patchReturnBorrowApi(payload);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  status === "success" && dispatch(getAllBorrowsAction());
};
