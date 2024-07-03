import React, { useContext, useEffect, useState } from "react";
import { AuthSlideContext } from "../context/AuthContextProvider";
import {
  Text,
  Button,
  Image,
  Box,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const { slide, setSlide, images } = useContext(AuthSlideContext);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slide, images.length]);

  const goToNextSlide = () => {
    setSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  const buttonIconSize = useBreakpointValue({ base: "42px", md: "50px" });
  return (
    <Box position="relative">
      <Image
        style={{ width: "100%", height: "auto", maxHeight: "500px" }}
        src={images[slide]}
        alt={`Slide ${slide + 1}`}
      />
      <Box
        position="absolute"
        bottom="30%"
        right="45%"
        display="flex"
        alignItems="flex-end"
      >
        <Button size={buttonSize}  onClick={goToPreviousSlide} bg="none">
          <Image
            h="50px"
            src="https://cdn-icons-png.flaticon.com/128/4347/4347403.png"
          />
        </Button>
        <Button size={buttonSize} onClick={goToNextSlide} bg="none">
          <Image
            h="42px"
            src="https://cdn-icons-png.flaticon.com/128/318/318275.png"
          />
        </Button>
      </Box>

      <Text mt="20px" fontSize={["24px", "36px"]} textAlign="center">
        Find it first on UnityHub.
      </Text>

      <Text mt="8px" textAlign="center" fontSize={["14px", "18px"]}>
        UnityHub is where early adopters and innovation seekers find lively,
        imaginative tech before it hits the mainstream.
      </Text>
      <Box
        w={["250px", "290px"]}
        m="auto"
        mt={["10px", "20px"]}
        display="flex"
        justifyContent="center"
      >
        <Button
          fontSize="14px"
          color="white"
          bg="#E51075"
          borderRadius="2px"
          _hover={{ bg: "#E51075" }}
          mr={["10px", "20px"]}
        >
          <Link 
          onClick={() => navigate("/teamFavourites")}

          > TEAM FAVOURITES</Link>
        
        </Button>
        <Button
          fontSize="14px"
          color="#E51075"
          bg="white"
          borderRadius="2px"
          border="1px"
          borderColor="gray.200"
          _hover={{ bg: "#E51075", borderColor: "gray",color:"white"  }}
        >
          <Link 
                    onClick={() => navigate("/whatweDo")}

          >
            LEARN NOW
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
