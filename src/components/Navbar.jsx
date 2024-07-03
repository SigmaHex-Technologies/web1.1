import React, { useContext, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Image,
  Link,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Explore from "../pages/Explore";
import Dropdown from "./Dropdown";
import Search from "../pages/Search";
import { AuthSlideContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [islogout, setLogout] = useState(false);
  const [firstName, setFirstname] = useState("");
  const { isAuth, userDetails, setIsAuth } = useContext(AuthSlideContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = React.useRef();
  const btnRef = React.useRef();

  useEffect(() => {
    const finalObj = JSON.parse(localStorage.getItem("myobject"));
    if (finalObj && finalObj.length > 0) {
      setFirstname(finalObj[finalObj.length - 1].firstName);
    }
  }, []);

  const openDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Open the dropdown
  };

  const handleLogout = () => {
    setLogout(true);
    setFirstname("");
    console.log("out");
    setIsDropdownOpen(false); // Close the dropdown on logout
    setIsAuth(false);
  };

  const mobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  return (
    <Box
      h="auto"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px"
      borderColor="gray.200"
      mb={{ base: "3", sm: "4", md: "6", lg: "0" }}
    >
      <Box
        ml={5}
        h="65px"
        w={{ base: "100%", md: "600px" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Breadcrumb spacing="8px" separator="">
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate("/")}>
              <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
                Unity<span style={{ color: "#E51075" }}>Hub.</span>
              </h1>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {!mobile && <Explore />}

          {!mobile && (
            <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
              <BreadcrumbLink
                onClick={() => navigate("/ourTop10Finds")}
                _hover={{ color: "#E51075", textDecoration: "none" }}
              >
                Our Top 10 Finds
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {!mobile && (
            <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
              <BreadcrumbLink
                onClick={() => navigate("/teamFavourites")}
                _hover={{ color: "#E51075", textDecoration: "none" }}
              >
                Team Favourites
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}
          <Search />
        </Breadcrumb>
      </Box>

      {!mobile && (
        <Box
          h="auto"
          w={{ base: "100%", md: "420px" }}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Breadcrumb separator="">
            <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
              <BreadcrumbLink
                onClick={() => navigate("/startaCompaign")}
                _hover={{ color: "#E51075", textDecoration: "none" }}
              >
                Start a Compaign
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
              <BreadcrumbLink
                onClick={() => navigate("/whatweDo")}
                _hover={{ color: "#E51075", textDecoration: "none" }}
              >
                What We Do
              </BreadcrumbLink>
            </BreadcrumbItem>

            <Link to="/Signup">
              {isAuth ? (
                <Dropdown
                  isOpen={isDropdownOpen}
                  onClose={() => setIsDropdownOpen(false)}
                  firstName={userDetails.firstName}
                  handleLogout={handleLogout}
                  openDropdown={openDropdown}
                />
              ) : (
                <Flex>
                  <Login />
                  <Signup />
                </Flex>
              )}
            </Link>
          </Breadcrumb>
        </Box>
      )}
      {mobile && (
        <>
          <Button ref={btnRef} colorScheme="pink" onClick={onOpen}>
            <HamburgerIcon />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="pink" h="100vh">
              <DrawerCloseButton />
              <DrawerHeader>
                <Heading textAlign="center" color="#E51075">
                  Welcome to UnityHub
                </Heading>
              </DrawerHeader>

              <DrawerBody>
                <Breadcrumb>
                  <Stack direction="column" gap="7vh" justify="center">
                    <Link to="/Signup">
                      {isAuth ? (
                        <Dropdown
                          isOpen={isDropdownOpen}
                          onClose={() => setIsDropdownOpen(false)}
                          firstName={userDetails.firstName}
                          handleLogout={handleLogout}
                          openDropdown={openDropdown}
                        />
                      ) : (
                        <Flex ml="70px" color="#E51075">
                          <Signup />
                          <Login />
                        </Flex>
                      )}
                    </Link>

                    <BreadcrumbItem>
                      <BreadcrumbLink
                        onClick={() => navigate("/ourTop10Finds")}
                        _hover={{ color: "#E51075", textDecoration: "none" }}
                        ml="70px"
                        fontWeight="bold"
                      >
                        Our Top 10 Finds
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbLink
                      onClick={() => navigate("/teamFavourites")}
                      _hover={{ color: "#E51075", textDecoration: "none" }}
                      ml="70px"
                      fontWeight="bold"
                    >
                      Team Favourites
                    </BreadcrumbLink>

                    <BreadcrumbItem>
                      <BreadcrumbLink
                        onClick={() => navigate("/startaCompaign")}
                        _hover={{ color: "#E51075", textDecoration: "none" }}
                        ml="70px"
                        fontWeight="bold"
                      >
                        Start a Compaign
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbLink
                      onClick={() => navigate("/whatweDo")}
                      _hover={{ color: "#E51075", textDecoration: "none" }}
                      ml="70px"
                      fontWeight="bold"
                    >
                      What We Do
                    </BreadcrumbLink>
                  </Stack>
                </Breadcrumb>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Box>
  );
}
