import { fetchNewAccessJWTApi } from "../../services/authAPI.js";
import { fetchUserApi } from "./userAPI.js";
import { setUser } from "./userSlice.js";

export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, payload } = await fetchUserApi();

  // receive user
  // dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};

export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");

  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }

  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    // fetch accessJWT and set in the sessionStorage

    const { payload } = await fetchNewAccessJWTApi();

    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      dispatch(fetchUserAction());
    }
  }
};
