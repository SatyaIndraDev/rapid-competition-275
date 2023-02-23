import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import Test from "./Test";
import { ConstructionOutlined } from "@mui/icons-material";

const AccordCompo = ({ item, handleChange, category }) => {
  //  console.log(category,"cat")

  return (
    <div>
      {" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {item.productType[0]}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <CheckboxGroup colorScheme="green">
            <Box
              direction={["column", "row"]}
              align="flex-start"
             
            >
              {item.productType.map((item1) => {
                return (
                  <Test
                    key={item1.id}
                    value={item1}
                    onChange={() => handleChange(item.productType[0], item1)}
                    category={category}
                  />
                );
              })}
            </Box>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default AccordCompo;
