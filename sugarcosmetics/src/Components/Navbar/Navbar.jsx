import {
  Box,
  HStack,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Spacer,
  Text,
  Container,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box w="100%">
      <Container maxW="100%" mx="auto" px={4} bg="black">
        <Text color="white" align="center">
          Get Rs.300 OFF on minimum spend of Rs.999
        </Text>
        <Divider />
        <HStack spacing={4} justify="space-between">
          <Image src={logo} w={100} onClick={() => navigate("/")} />

          <Input
            placeholder="Lipstick Liquid"
            maxW="39rem"
            borderRadius="5px"
            borderColor="white"
            display={{ base: "none", md: "block" }}
          />

          <HStack spacing={[3, 10, 10]}>
            <Text
              color="white"
              display={{ base: "none", md: "flex" }}
              gap="2"
              alignItems="center"
              onClick={() => navigate("/login")}
            >
              {" "}
              <span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="person_icon"
                  style={{ width: "19px", height: "19px" }}
                >
                  <path
                    d="M9.5 0C4.253 0 0 4.367 0 9.753c0 5.387 4.253 9.753 9.5 9.753S19 15.14 19 9.753C19 4.367 14.747 0 9.5 0Zm0 2.714c2.126 0 3.848 1.768 3.848 3.95 0 2.183-1.722 3.952-3.848 3.952s-3.848-1.77-3.848-3.951c0-2.183 1.722-3.951 3.848-3.951Zm0 15.344c-2.445 0-4.636-1.114-6.12-2.874 1.234-2.151 3.512-3.596 6.12-3.596s4.886 1.445 6.12 3.596c-1.484 1.76-3.675 2.874-6.12 2.874Z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
              Login/Register
            </Text>

            <Box display="flex" gap={4} alignItems="center">
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="favorite_icon"
                class="cursor"
              >
                <path
                  d="M19.071 2.37A6.639 6.639 0 0 0 14.908.5a6.675 6.675 0 0 0-4.4 1.244A6.677 6.677 0 0 0 5.855.507a6.622 6.622 0 0 0-4.263 2.204A6.374 6.374 0 0 0 .005 7.172a6.394 6.394 0 0 0 1.939 4.326l7.818 7.666a1.051 1.051 0 0 0 .745.304 1.066 1.066 0 0 0 .745-.304l7.82-7.666a6.446 6.446 0 0 0 1.427-2.094 6.342 6.342 0 0 0 0-4.94 6.445 6.445 0 0 0-1.428-2.093Zm-1.48 7.677-7.084 6.936-7.084-6.936A4.378 4.378 0 0 1 2.201 7.8a4.324 4.324 0 0 1 .25-2.535 4.423 4.423 0 0 1 1.64-1.975 4.555 4.555 0 0 1 2.48-.754 4.505 4.505 0 0 1 3.15 1.286 1.051 1.051 0 0 0 .744.304 1.067 1.067 0 0 0 .746-.304 4.536 4.536 0 0 1 3.103-1.07 4.524 4.524 0 0 1 3.013 1.296c.8.791 1.264 1.851 1.298 2.965a4.342 4.342 0 0 1-1.117 3.034h.083Z"
                  fill="#fff"
                ></path>
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
                style={{ color: "white", fontSize: "22px" }}
                onClick={() => navigate("/cart")}
              >
                <path
                  d="M14.876 5.857V5.9h3.054c.256 0 .5.093.681.26.18.166.28.39.28.624v10.192c0 .725-.311 1.421-.868 1.935a3.102 3.102 0 0 1-2.1.803H5.883c-.788 0-1.544-.29-2.1-.803a2.634 2.634 0 0 1-.869-1.935V6.784c0-.233.1-.458.28-.624.18-.167.426-.26.682-.26H6.93V4.93c0-.97.418-1.902 1.163-2.59a4.149 4.149 0 0 1 2.81-1.074c1.055 0 2.066.387 2.81 1.074.746.688 1.163 1.62 1.163 2.59v.926Zm-1.965.043h.042V4.93c0-.504-.217-.986-.602-1.341a2.138 2.138 0 0 0-1.448-.554c-.542 0-1.063.199-1.448.554a1.826 1.826 0 0 0-.601 1.34V5.9H12.91ZM4.88 7.668h-.043v9.308c0 .258.112.505.308.686.196.182.462.283.738.283h10.038c.276 0 .542-.101.738-.283a.934.934 0 0 0 .308-.686V7.668H14.876V8.637a.85.85 0 0 1-.28.624c-.18.167-.425.26-.681.26-.256 0-.501-.093-.682-.26a.85.85 0 0 1-.28-.624V7.668H8.854V8.637a.85.85 0 0 1-.28.624c-.181.167-.426.26-.682.26-.256 0-.501-.093-.681-.26a.85.85 0 0 1-.28-.624V7.668H4.88Z"
                  fill="#E9E9E9"
                  stroke="#FDFCFC"
                  stroke-width="0.084"
                ></path>
              </svg>
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="discount_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m8.744 3.662.832-.803.832.803a3 3 0 0 0 2.504.813l1.146-.162.2 1.134a3 3 0 0 0 1.55 2.132l1.018.54-.505 1.03a3 3 0 0 0 0 2.639l.505 1.031-1.018.54a3 3 0 0 0-1.55 2.131l-.2 1.134-1.146-.162a3 3 0 0 0-2.504.813l-.832.804-.832-.804a3 3 0 0 0-2.504-.813l-1.146.162-.2-1.134a3 3 0 0 0-1.55-2.132l-1.018-.539.505-1.031a3 3 0 0 0 0-2.638l-.505-1.032 1.018-.539a3 3 0 0 0 1.55-2.132l.2-1.134 1.146.162a3 3 0 0 0 2.504-.813ZM8.88.75a1 1 0 0 1 1.39 0l1.527 1.475a1 1 0 0 0 .834.27l2.104-.296a1 1 0 0 1 1.125.817l.366 2.086a1 1 0 0 0 .517.71l1.874.993a1 1 0 0 1 .43 1.324l-.93 1.901a1 1 0 0 0 0 .88l.93 1.9a1 1 0 0 1-.43 1.324l-1.874.993a1 1 0 0 0-.517.71l-.366 2.087a1 1 0 0 1-1.125.817l-2.104-.297a1 1 0 0 0-.834.27l-1.527 1.475a1 1 0 0 1-1.39 0l-1.527-1.474a1 1 0 0 0-.834-.271l-2.104.297a1 1 0 0 1-1.125-.817l-.366-2.087a1 1 0 0 0-.517-.71l-1.874-.993a1 1 0 0 1-.43-1.323l.93-1.902a1 1 0 0 0 0-.879l-.93-1.901a1 1 0 0 1 .43-1.324l1.874-.992a1 1 0 0 0 .517-.711l.366-2.086a1 1 0 0 1 1.125-.817l2.104.297a1 1 0 0 0 .834-.271L8.881.749Zm4.524 7.31a1 1 0 0 0-1.413-1.415l-6.245 6.234a1 1 0 1 0 1.413 1.416l6.245-6.235Zm-4.87-.188A1.56 1.56 0 0 1 6.974 9.43 1.56 1.56 0 1 1 8.535 7.87Zm3.642 6.754a1.56 1.56 0 0 0 1.561-1.559 1.56 1.56 0 0 0-1.56-1.558 1.56 1.56 0 1 0 0 3.117Z"
                  fill="#fff"
                ></path>
              </svg>
            </Box>
          </HStack>
        </HStack>
      </Container>

      <HStack bg="black" spacing={10} pb={3}>
        <Text color="white" onClick={() => navigate("/products")}>
          SKINCARE
        </Text>
        <Text color="white" display={{ base: "none", md: "block" }}>
          MAKEUP
        </Text>
        <Text color="white" display={{ base: "none", md: "block" }}>
          BRUSHES
        </Text>
        <Text color="white" display={{ base: "none", md: "block" }}>
          GIFTING
        </Text>
        <Text color="white" display={{ base: "none", md: "block" }}>
          BLOG
        </Text>
        <Text color="white" display={{ base: "none", md: "block" }}>
          OFFERS
        </Text>
        <Text color="white" display={{ base: "none", md: "block" }}>
          STORES
        </Text>
      </HStack>
    </Box>
  );
};
