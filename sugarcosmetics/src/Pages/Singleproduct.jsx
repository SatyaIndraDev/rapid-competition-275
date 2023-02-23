import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProdContext } from "../context/productContext";
import {
  Box,
  Divider,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import Cartbutton from "../Components/ProductsData/Cartbutton";
import { Navbar } from "../Components/Navbar/Navbar";
import axios from "axios";

const Singleproduct = () => {
  const [data, setData] = useState({});
  console.log(data);
  const { id } = useParams();
  const [centerimg, SetCenterimg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sugarcosmetics.onrender.com/products/" + id)
      .then((res) => {
        setData(res.data);
        SetCenterimg(res.data.images[0]);
        setLoading(false);
      });
  }, [id]);
  if (loading)
    return (
      <img
        src="https://cdn.dribbble.com/users/31776/screenshots/754788/loading_cart.gif"
        alt=""
      />
    );
  return (
    <Box>
      <Navbar />

      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="center"
        spacing={50}
        border="2px solid red"
      >
        <HStack spacing={10}>
          <VStack spacing={5}>
            {data.images.map((img) => {
              return (
                <Image w="50px" src={img} onClick={() => SetCenterimg(img)} />
              );
            })}
          </VStack>
          <Image src={centerimg} w="300px" minW="80px" />
        </HStack>
        <VStack
          align="revert-layer"
          spacing={{ base: "none", sm: 3, xl: 5 }}
          w={{ base: "100%", sm: "200px", md: "400px", xl: "500px" }}
        >
          <Text>{data.name}</Text>
          <Text>{data.price}</Text>
          <VStack align="revert-layer" spacing={5}>
            <Text>AVAILABLE OFFERS!!</Text>
            <Text overflow="hidden">
              Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson
              (Crimson Red) On A Minimum Spend Of Rs. 799
            </Text>
            <Text overflow="hidden">
              Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.499
            </Text>
          </VStack>
          <Box>
            <HStack spacing="60px">
              <HamburgerIcon />
              <Cartbutton />
            </HStack>
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Singleproduct;
