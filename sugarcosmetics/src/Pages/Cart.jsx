// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartOne } from "../context/cartContext";
import {Navbar}  from "../Components/Navbar/Navbar";

// const Cart = () => {
//   const { state, getCartData } = useContext(CartOne);
//   useEffect(() => {
//     getCartData();
//   }, []);

//   return <div>Cart</div>;
// };

// export default Cart;

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";

const Cart = () => {
  const { state, getCartData } = useContext(CartOne);
  useEffect(() => {
    getCartData();
  }, []);
  console.log(state);
  const navigate = useNavigate();

  const BackToPRoductPage = () => {
    navigate("/men-clothing");
  };

  let token = "ds";
  let isAuth = true;
  if (state.cart.length === 0) {
    return (
      <Stack
        alignItems="center"
        p={15}
        direction={{ base: "column", md: "row" }}
        justify="center"
      >
        <Image src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!c1024wm0" />

        <VStack spacing={30}>
          <Text fontSize="3xl">Nothing In The Bag </Text>

          <Divider />
          <Button
            onClick={() => BackToPRoductPage()}
            fontSize="x-large"
            padding={8}
            colorScheme="messenger"
          >
            Continue Shopping
          </Button>
        </VStack>
      </Stack>
    );
  }

  return (
    <Box>
      <Navbar />
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            {/* <Heading fontSize="2xl">Total Product in {state.cart.length}</Heading> */}

            <Stack spacing="6">
              {state.cart?.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default Cart;
