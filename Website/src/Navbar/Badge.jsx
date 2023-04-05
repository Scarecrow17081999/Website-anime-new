import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);

  return (
    <Box
      sx={{
        color: "action.active",
       padding:'25px'
      }}
    >
      <Badge
        color="secondary"
        badgeContent={count}
        invisible={count < 1 ? true : false}
      >
        <NotificationsIcon />
      </Badge>
    </Box>
  );
}
