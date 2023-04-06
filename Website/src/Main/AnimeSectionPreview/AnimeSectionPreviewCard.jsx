import { Box, Stack, Divider, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
export function AnimeSectionPreviewCard({val,title}) {
    console.log(val,title);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ padding: "15px 0 15px 0", marginBottom: "0px" }}>
        {" "}
        <Typography
          sx={{ textAlign: "start", paddingLeft: "20px" }}
          variant="h6"
          component="h2"
        >
          {title == "topAiring"
            ? "Top Airing"
            : title == "mostPopular"
            ? "Most Popular"
            : title == "favourite"
            ? "Favourite"
            : title == "currenWatch"
            ? "Current Watch"
            : title}
        </Typography>
      </Box>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          listStyle: "none",
          margin: "0px",
          padding: "0px",
        }}
      >
        {val.map((e) => {
          return (
            <>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={e.img}>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={e.title} secondary="Jan 9, 2014" />
              </ListItem>
            </>
          );
        })}
        <Button sx={{ width: "100%",padding:'15px 0 15px 0' }}>
          Find More{<KeyboardArrowRightIcon />}
        </Button>
      </List>
    </Box>
  );
}
