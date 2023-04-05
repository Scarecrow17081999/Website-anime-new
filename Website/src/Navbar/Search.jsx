import * as React from "react";
import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
// import { Style } from "@mui/icons-material";
// import { background } from "@chakra-ui/react";

export default function InputWithIcon() {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      sx={{ "& > :not(style)": { m: 1 } }}
    >
      <FormControl variant="standard">
        <OutlinedInput sx={{height:'40px'}}
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon sx={{cursor:'pointer'}}  />
            </InputAdornment>
          }
        />
      </FormControl>

      <FilterAltRoundedIcon  sx={{ fontSize: 40 ,cursor:'pointer'}} />
    </Box>
  );
}
