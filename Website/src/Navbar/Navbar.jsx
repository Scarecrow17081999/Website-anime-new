import React from "react";
import {
  Box,
  StackDivider,
  Heading,
  Stack,
  ChakraProvider,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  useDisclosure,
  DrawerCloseButton,
  Divider
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InputWithIcon from "./Search";
import BadgeVisibility from "./Badge";
import Genres from "./Genres";
import UserMenu from "./User";
import LoginModal from "./LoginModal";
import ToastStatus from './Toast'


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

        <Box display="flex" justifyContent="flex-end">
          <Link>Contact</Link>
          <Link>Profile</Link>
          <ToastStatus />
        </Box>

        <Box marginRight={"25px"} display="flex" alignItems={"center"}>
          <BadgeVisibility />
          {isAuthenticated ? <UserMenu /> : <LoginModal />}
        </Box>
      </Box>
      <ChakraProvider>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" color={'white'}>Basic Drawer</DrawerHeader>
            <DrawerBody  p={"0"}>
              <Stack
                margin={"15px 0px 22px 0"}
                divider={<StackDivider />}
                spacing="4"
              >
                <Box pl={"15px"}>
                  <Link to="/" size="md" textTransform="uppercase">
                    Summary
                  </Link>
                </Box>
                <Box pl={"15px"}>
                  <Link size="xs" textTransform="uppercase">
                    Summary
                  </Link>
                </Box>
                <Box pl={"15px"}>
                  <Link size="xs" textTransform="uppercase">
                    Summary
                  </Link>
                </Box>
                <Box pl={"15px"}>
                  <Link size="xs" textTransform="uppercase">
                    Summary
                  </Link>
                </Box>
                <Box pl={"15px"}>
                  <Link size="xs" textTransform="uppercase">
                    Summary
                  </Link>
                </Box>
                <Box pl={"15px"}>
                  <Link size="xs" textTransform="uppercase">
                    Summary
                  </Link>
                </Box>
                <Box pl={"15px"}>
                  <Link size="xs" textTransform="uppercase">
                    Genres
                  </Link>
                </Box>
              </Stack>
              <Divider borderBottomWidth="1px" />
              <Genres />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ChakraProvider>
    </>
  );
}
