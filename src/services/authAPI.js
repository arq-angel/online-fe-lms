// all api calls realted to signup, login, token

import { apiProcessor } from "./api.js";
const apiBaseUrl = "http://localhost:8000";
const authApiEP = apiBaseUrl + "/api/v1/auth";

export const signUpNewUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

export const activateNewUserApi = (payload) => {
  const obj = {
    url: authApiEP + "/activate-user",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};

export const signinUserApi = (payload) => {
  const obj = {
    url: authApiEP + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};

// request new accessJWT api
export const fetchNewAccessJWTApi = async () => {
  const obj = {
    url: authApiEP + "/renew-jwt",
    method: "get",
    isPrivateCall: true,
    isRefreshJWT: true,
  };
  return apiProcessor(obj);
};

// logout user
export const logoutApi = async () => {
  const obj = {
    url: authApiEP + "/logout",
    method: "get",
    isPrivateCall: true,
  };
  return apiProcessor(obj);
};

// request password reset OTP
export const requestPassResetOTPApi = async (payload) => {
  const obj = {
    url: authApiEP + "/otp",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};

// reset password
export const resetPasswordApi = async (payload) => {
  const obj = {
    url: authApiEP + "/reset-password",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
