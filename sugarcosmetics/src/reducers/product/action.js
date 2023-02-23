import * as types from "./actionTypes";
export const productRequest = () => {
  return {
    type: types.Get_Data_Request,
  };
};

export const productSuccess = (payload) => {
  return {
    type: types.Get_Data_Success,
    payload,
  };
};
export const productFailure = () => {
  return {
    type: types.Get_Data_Failure,
  };
};
