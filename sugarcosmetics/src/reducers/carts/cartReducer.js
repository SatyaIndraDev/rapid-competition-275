import * as types from "./actionTypes";
export const initialData = {
  cart: [],
  total: "",
};

function cartReducer(oldState = initialData, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_CART_REQUEST:
      return {
        ...oldState,
        cart: payload,
      };
    default:
      return oldState;
  }
}

export default cartReducer;
