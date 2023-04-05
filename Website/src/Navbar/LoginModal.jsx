import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import {
  FormHelperText,
  InputLabel,
  Input,
  Button,
  FormControl,
  TextField,
  Modal,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Login() {
  const [loginSuccessful, setLoginSuccessful] = React.useState(true);
  const [loginOrRegister, setLoginOrRegister] = React.useState(false);
  return (!loginOrRegister?
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
      p={1}
    >
      <FormControl>
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Link>forgot password?</Link>
        </Box>
        <ChildModal />
        <Button variant="outlined" type="submit">
          {loginSuccessful ? "Login" : <CircularProgress size={"1.6rem"} />}
        </Button>
        <Box textAlign={"center"}>
          <p>
            Don't have an account?{" "}
            <Link onClick={()=>{setLoginOrRegister(true)}} style={{ color: "green" }}>Register</Link>
          </p>
        </Box>
      </FormControl>
    </Box>
  :<Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
      p={1}
    >
      <FormControl>
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <TextField id="standard-basic" label="Confirm Password" variant="standard" />
        <Box
        >
        </Box>
        <ChildModal />
        <Button variant="outlined" type="submit">
          {loginSuccessful ? "Register" : <CircularProgress size={"1.6rem"} />}
        </Button>
        <Box textAlign={"center"}>
          <p>
            Have an account?{" "}
            <Link onClick={()=>{setLoginOrRegister(false)}} style={{ color: "green" }}>Login</Link>
          </p>
        </Box>
      </FormControl>
    </Box>);
}

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>CAPTCHA</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function LoginModal() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Login />
        </Box>
      </Modal>
    </div>
  );
}
