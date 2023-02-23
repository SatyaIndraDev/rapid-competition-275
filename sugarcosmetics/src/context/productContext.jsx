import React, { useReducer } from "react";
import { createContext } from "react";
import ProductReducer, {
  initialData,
} from "../reducers/product/productReducer";
export const ProdContext = createContext();
const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialData);
  return (
    <ProdContext.Provider value={{ state, dispatch }}>
      {children}
    </ProdContext.Provider>
  );
};

export default ProductContext;
