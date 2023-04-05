import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {Link} from "react-router-dom";
import { Box, Divider } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
export default function Footer() {
  return (
    <div>
      <Box>
        <TwitterIcon />
        <FacebookIcon />
        <RedditIcon />
      </Box>
      <Divider sx={{ margin: "15px" }} />
      <Box>
       <Link to="/termsAndServices">Terms ans Services</Link>
       <Link >Contacts</Link>
      </Box>
    </div>
  );
}
