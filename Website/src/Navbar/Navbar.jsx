import React from "react";
import { Box } from "@chakra-ui/react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputWithIcon from "./Search";
import { ChakraProvider } from "@chakra-ui/react";
import BadgeVisibility from "./Badge";
import BasicButtons from "./Buttoncomp";
import UserMenu from "./User";
import {
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  Button,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(showButton);
  return (
    <>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        bg=""
        w="100%"
        color="black"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      >
        <Box display="flex" alignItems={"center"}>
          <MenuIcon sx={{ fontSize: 40, cursor: "pointer" }} onClick={onOpen} />
          <InputWithIcon />
        </Box>

        <Box display="flex" alignItems={"center"}>
          <Typography sx={{ minWidth: 100 }}>Contact</Typography>
          <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        </Box>

        <Box marginRight={"25px"} display="flex" alignItems={"center"}>
          <BadgeVisibility />
          {isAuthenticated ? <UserMenu /> : <BasicButtons />}
        </Box>
      </Box>
      <ChakraProvider>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ChakraProvider>
    </>
  );
}
