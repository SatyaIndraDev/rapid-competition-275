import * as types from "./actionTypes";
export const initialData = {
  products: [],
  isLoading: false,
  isError: false,
};

function ProductReducer(oldState = initialData, action) {
  const { type, payload } = action;
     
  switch (type) {
    case types.Get_Data_Request:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.Get_Data_Success:
      return {
        ...oldState,
        products: payload,
      };
    case types.Get_Data_Failure:
      return {
        ...oldState,
        isError: true,
      };
    default:
      return oldState;
  }
}

export default ProductReducer;
