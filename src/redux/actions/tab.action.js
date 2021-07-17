import { tabContants } from "./constants";

export const createTab = (data) => {
  return async (dispatch) => {
    dispatch({
      type: tabContants.GET_TAB_SUCCESS,
      payload: {
        create: data,
      },
    });
  };
};

export const removeTab = (data) => {
  return async (dispatch) => {
    dispatch({
      type: tabContants.DELETE_TAB_SUCCESS,
      payload: {
        remove: data,
      },
    });
  };
};
