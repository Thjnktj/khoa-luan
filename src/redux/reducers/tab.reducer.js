import { tabContants } from "../actions/constants";

const initialState = {
  tabs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case tabContants.GET_TAB_SUCCESS:
      state = {
        ...state,
        tabs: [...state.tabs, action.payload.create],
      };
      break;

    case tabContants.DELETE_TAB_SUCCESS:
      state = {
        ...state,
      };
      break;
    default:
      return state;
  }
  console.log("state", state.tabs);
  return state;
};

export default reducer;
