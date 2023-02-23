import { Box, FormLabel } from "@chakra-ui/react";
import { Label } from "@mui/icons-material";
import React from "react";

const Test = ({ value, onChange, category }) => {
  return (
    <Box align="center" justify="start" display="flex">
      <input
        type="checkbox"
        value={value}
        defaultChecked={category.includes(value)}
        onChange={onChange}
      />
      <label style={{ marginLeft: "10px" }}>{value}</label>
    </Box>
  );
};

export default Test;
