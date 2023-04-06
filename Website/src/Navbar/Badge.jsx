import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default  function BadgeVisibility() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [count, setCount] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
          color: "action.active",
          padding: "25px",
        }}
      >
        <Badge
          color="secondary"
          badgeContent={count}
          invisible={count < 1 ? true : false}
        >
          <NotificationsIcon onClick={handleClick} sx={{cursor:'pointer'}} />
        </Badge>
      </Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
    
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
// export default function BadgeVisibility() {
//   const [count, setCount] = React.useState(1);

//   return (
//     <Box
//       sx={{
//         color: "action.active",
//        padding:'25px'
//       }}
//     >
//       <Badge
//         color="secondary"
//         badgeContent={count}
//         invisible={count < 1 ? true : false}
//       >

//         <NotificationsIcon />
//       </Badge>
//     </Box>
//   );
// }
