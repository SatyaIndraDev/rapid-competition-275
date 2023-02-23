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
import AccordCompo from "./AccordCompo";
const Filter = ({ setFilterType, filterType }) => {
  const data = [
    {
      productType: [
        "type",
        "primers",
        "powder",
        "Translucent Powder",
        "compact",
        "Foundations & Concealers",
        "Face Foundation",
        "BB Cream",
        "stick",
        "palette",
        "Pressed Powder",
        "value sets",
        "",
      ],
    },
    {
      productType: [
        "feature",
        "primer",
        "Translucent Powder",
        "Face Foundation",
        "stick",
        "",
      ],
    },
    {
      productType: [
        "formulation",
        "cream",
        "Loose Powder",
        "Pressed Powder",
        "stick",
        "Liquid",
      ],
    },
    {
      productType: [
        "concern",
        "Brightening",
        "oil control",
        "under eye",
        "Blurring",
      ],
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreparams = searchParams.getAll(filterType);
  const initialSortparams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreparams || []);

  const [sortBy, setSortBy] = useState(initialSortparams || "");
  const [prodType, setProdType] = useState(filterType);
  const handleChange = (a, b) => {
    const checkedData = b; //cream
    const new_category = [...category];

    if (category.includes(checkedData)) {
      new_category.splice(new_category.indexOf(checkedData), 1);
    } else {
      new_category.push(checkedData);
    }
    setCategory(new_category);
    setProdType(a);
    setFilterType(a);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    if (category || sortBy) {
      const params = {};
      category && (params[prodType] = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);
  return (
    <Box minW="200px" w="300px" height="fit-content" borderRadius="10px" display={{base:"none",md:"block"}}>
      <Box>
        <Accordion allowToggle>
          <AccordionItem shadow="0 2px 5px rgb(0 0 0 / 10%)" bg={"white"} mb="30px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Sort By: Relevance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                <VStack
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                  align="flex-start"
                >
                  <input type="checkbox" />
                  <label>Relevance</label>
                  <input
                    type="radio"
                    value="asc"
                    onChange={handleSort}
                    name="sortBy"
                    defaultChecked={sortBy == "asc"}
                  />
                  <label>Ascending</label>
                  <input
                    type="radio"
                    value="desc"
                    onChange={handleSort}
                    name="sortBy"
                    defaultChecked={sortBy == "desc"}
                  />
                  <label>Descending</label>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box>
        <Accordion allowToggle shadow="0 2px 5px rgb(0 0 0 / 10%)" bg={"white"}>
          {data.map((item) => {
            return (
              <AccordCompo
                item={item}
                handleChange={handleChange}
                category={category}
                key={item}
              />
            );
          })}
        </Accordion>
      </Box>
    </Box>
  );
};

export default Filter;
