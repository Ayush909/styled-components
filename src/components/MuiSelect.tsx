import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [countries, setCountries] = useState<String[]>([]);
  //   console.log(countries);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    console.log(typeof value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  console.log(countries);
  return (
    <Box width={"250px"}>
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
