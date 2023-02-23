import React from "react";
import ProductCard from "./ProductCard";
import { Box, Grid, SimpleGrid, Wrap } from "@chakra-ui/react";
import { useContext } from "react";
import { ProdContext } from "../../context/productContext";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  productFailure,
  productSuccess,
  productRequest,
} from "../../reducers/product/action";

const ProductContent = ({ filterType }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { state, dispatch } = useContext(ProdContext);

  const getData = async (queryParams) => {
    dispatch(productRequest());
    await axios
      .get("https://sugarcosmetics.onrender.com/products", queryParams)
      .then((res) => {
        dispatch(productSuccess(res.data));
        console.log(res.data, "res");
      })
      .catch(() => {
        dispatch(productFailure());
      });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (location || state.products.length == 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          [filterType]: searchParams.getAll(`${filterType}`),
          _sort: sortBy && "actual_price",
          _order: sortBy,
        },
      };
      getData(queryParams);
    }
  }, [location.search, filterType]);
  return (
    <Box width={{ base: "100%", md: "70%" }}>
      <SimpleGrid spacing="10px" columns={[1, 2, 2, 3]}>
        {state.products.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </SimpleGrid>
    </Box>
  );
  {
  }
};

export default ProductContent;
