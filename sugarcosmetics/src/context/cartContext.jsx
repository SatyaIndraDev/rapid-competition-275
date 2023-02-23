import axios from "axios";
import React, { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { AddtocartRequest, getCartDataRequest } from "../reducers/carts/action";
import cartReducer from "../reducers/carts/cartReducer";
import { initialData } from "../reducers/carts/cartReducer";

export const CartOne = createContext();
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialData);

  const addtoCart = async (data) => {
    await axios
      .post("https://sugarcosmetics.onrender.com/cart", data)
      .then((res) => {
        console.log("data added");
      })
      .catch((err) => {
        console.log("err while posting cart data");
      });
  };
  useEffect(() => {
    getCartData();
  }, []);
  const getCartData = async () => {
    await axios.get("https://sugarcosmetics.onrender.com/cart").then((res) => {
      dispatch(getCartDataRequest(res.data));
    });
  };
  const updateCart = (val, id) => {
    axios
      .patch(`https://sugarcosmetics.onrender.com/cart/${id}`, { quantity: val })
      .then((res) => {
        getCartData();
      });
  };
  const deleteCart = (id) => {
    axios.delete(`https://sugarcosmetics.onrender.com/cart/${id}`).then((res) => {
      getCartData();
    });
  };
  return (
    <CartOne.Provider
      value={{ state, dispatch, addtoCart, getCartData, updateCart ,deleteCart}}
    >
      {children}
    </CartOne.Provider>
  );
};

export default CartContext;
