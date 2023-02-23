import React from "react";

import {
  Box,
  Image,
  Text,
  HStack,
  IconButton,
  Button,
  VStack,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartOne } from "../../context/cartContext";
import { BiHeart } from "react-icons/bi";
const ProductCard = ({ data }) => {
  const { addtoCart } = useContext(CartOne);
  const navigate = useNavigate();
  const navigateSinglePage = () => {
    navigate(`/products/${data.id}`);
  };
  return (
    <VStack
      width={{base:"100%",md:"90%"}}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      // border="2px solid red"
      h="450px"
      shadow="0 2px 5px rgb(0 0 0 / 10%)"
      bg={"white"}
      justify="center"
      p={5}
    >
      <Image
        src={data.images[0]}
        h="200px"
        m="auto"
        onClick={navigateSinglePage}
      />

      <Box p="4">
        <Box
          // fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          textAlign="center"
        >
          <Text fontSize="xs">{data.name}</Text>
        </Box>
        <Box textAlign="center" p="2">
          10 shades
        </Box>
        <Box textAlign="center">
          <Text fontSize="lg" as="b">
            {data.price}
          </Text>
        </Box>
      </Box>

      <Box textAlign="center">
        <Text fontSize="md">{data.rating}</Text>
      </Box>

      <HStack width="90%" alignSelf="center" spacing={5}>
        <IconButton
          variant="outline"
          colorScheme="black"
          aria-label="Send email"
          icon={<BiHeart />}
        />
        {/* <Cartbutton onClick={()=> addtoCart(data)}/> */}
        <Button
          variant="solid"
          colorScheme="blackAlpha"
          bg="black"
          w="full"
          onClick={() => addtoCart(data)}
        >
          Add to cart
        </Button>
      </HStack>
    </VStack>
  );
};

export default ProductCard;
