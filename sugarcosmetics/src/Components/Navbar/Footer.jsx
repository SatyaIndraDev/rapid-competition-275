import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon, MinusIcon } from "@chakra-ui/icons";
export const Footer = () => {
  let x = ">";
  return (
    <>
      <Box>
        <Box w="100%" p={4} color="black">
          READ MORE ABOUT SUGAR COSMETICS{" "}
          <ChevronRightIcon w={8} h={8} color="red.500" />
        </Box>
        <VStack>
          <Center w={"100%"}>
            <Flex>
              {" "}
              <MinusIcon color="red" />
              <Text fontSize="3xl" as="b">
                {" "}
                LET'S STAY IN TOUCH
              </Text>{" "}
              <MinusIcon color="red" />
            </Flex>
          </Center>
          <Center>
            <Text>
              Get the latest beauty tips straight to your inbox. Can’t wait to
              connect!
            </Text>
          </Center>
          <Center>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Input placeholder="Entre your email" borderRightRadius={0} />
              <Button
                color={"white"}
                bg={"black"}
                pl="50px"
                pr="50px"
                borderLeftRadius={0}
              >
                SUBSCRIBE
              </Button>
            </Box>
          </Center>
        </VStack>
      </Box>
    </>
  );
};
