import { productContants } from "../actions/constants";

const initialState = {
  tabs: [],
  sidebar: [],
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productContants.GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        tabs: action.payload.list,
        sidebar: action.payload.sidebar,
        products: action.payload.products,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
