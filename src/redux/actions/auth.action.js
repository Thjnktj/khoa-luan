import axiosClient from "../../api";
import { authContants } from "./constants";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authContants.LOGIN_REQUEST });
    const res = await axiosClient.post("/login", user);
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authContants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status !== 200) {
        dispatch({
          type: authContants.LOGIN_FAILED,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};

export const isLogOut = () => {
  return async (dispatch) => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    dispatch({ type: authContants.LOGOUT_SUCCES });
  };
};

export const isUserLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authContants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    }
  };
};

export const isUserRegister = (username) => {
  return async () => {
    let check = true;
    const res = await axiosClient.get("/root/user");
    if (res.status === 200) {
      const data = res.filter((item) => item.username === username);
      if (data.length > 0) check = false;
    }
    return check;
  };
};
