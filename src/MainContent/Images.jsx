import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Image,
  Link,
  Text,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Images() {
  const navigate = useNavigate();

  return (
    <div>
      <Flex w="90%" m="auto" mt="20px"  direction={{base:"column",sm:"column",md:"row",lg:"row"}}>
        <Box position="relative" p="4" h="420px" w={{base:"100%",md:"50%"}} >
          <Image
            w="100%"
            h="100%"
            src=""
          />
          <Flex  h="5vh">
            <Box
              p="2"
              ml="-12px"
              fontWeight="bold"
              fontSize="15px"
              mt="0px"
              h="5px"
            >
              <Text>Our roundup of standup projects</Text>
            </Box>
            <Spacer />
            <Box p="2" fontWeight="bold" fontSize="14px" mt="0px" h="5px">
              <Link
                mt="-10px"
                onClick={() => navigate("/ourTop10Finds")}
              >
                SEE THE COLLECTION 
              </Link>
            </Box>
          </Flex>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              onClick={() => navigate("/ourTop10Finds")}

              _hover={{ textDecoration: "none" }}
            >
              10 Cool & Clever Friends
            </Link>
          </Box>
        </Box>

        <Box position="relative" p="4" h="420px" w={{base:"100%",md:"50%"}}  >
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwdGFyaW5lcnxlbnwwfHwwfHx8MA%3D%3D"
          />

          <Flex>
            <Box
              p="2"
              ml="-12px"
              fontWeight="bold"
              fontSize="15px"
              mt="0px"
              h="5px"
            >
              <Text>Innodigym P1 & more team favourites</Text>
            </Box>
            <Spacer />
            <Box p="2" fontWeight="bold" fontSize="14px" mt="0px" h="5px">
              <Link
                mt="-10px"
                onClick={() => navigate("/ourTop10Finds")}

              >
                SEE THE COLLECTION 
              </Link>
            </Box>
          </Flex>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              onClick={() => navigate("/teamFavourites")}

              _hover={{ textDecoration: "none" }}
            >
              Team Favourites
            </Link>
          </Box>
        </Box>
      </Flex>

      <Flex
        w="90%"
        mx="auto"
        mt="35px"
        mt={{ sm: "100", base: "100", lg: "7" }}
        mb={{ sm: "180", base: "180", lg: "0" }}
        direction={{base:"column",sm:"column",md:"row",lg:"row"}}
      >
        <Box position="relative" p="4" h="420px"  w={{base:"100%",md:"50%"}} >
          <Image src="https://www.shutterstock.com/image-photo/black-drip-electric-coffee-machine-600nw-2111869688.jpg" />
          <Flex>
            <Box
              p="2"
              ml="-12px"
              fontWeight="bold"
              fontSize="15px"
              mt="0px"
              h="5px"
            >
              <Text>
                Campaign for software project
              </Text>
            </Box>
            <Spacer />
            <Box p="2" fontWeight="bold" fontSize="14px" mt="0px" h="5px">
              <Link
                mt="-10px"
                onClick={() => navigate("/ourTop10Finds")}

              >
                SEE THE COLLECTION 
              </Link>
            </Box>
          </Flex>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              onClick={() => navigate("/ourTop10Finds")}

              _hover={{ textDecoration: "none" }}
            >
              SOFTWARE
            </Link>
          </Box>
        </Box>

        <Box position="relative" p="4" h="420px" w={{base:"100%",md:"50%"}}>
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYXxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Flex>
            <Box
              p="2"
              ml="-12px"
              fontWeight="bold"
              fontSize="15px"
              mt="0px"
              h="5px"
            >
              <Text>
                Discover campaigns in a whole new way.Follow what matters to
                you.
              </Text>
            </Box>
            <Spacer />
            <Box p="2" fontWeight="bold" fontSize="14px" mt="0px" h="5px">
              <Link
                mt="-10px"
                onClick={() => navigate("/ourTop10Finds")}

              >
                SEE THE COLLECTION 
              </Link>
            </Box>
          </Flex>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              onClick={() => navigate("/teamFavourites")}

              _hover={{ textDecoration: "none" }}
            >
              Other Collections
            </Link>
          </Box>
        </Box>
      </Flex>

      <Flex
        maxW="1220px"
        w="100%"
        mx="auto"
        bg="gray.50"
        mt="70px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "100%", md: "300px" }}>
          <Image
            w="100%"
            h="350px"
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
          />
        </Box>

        <Box w={{ base: "100%", md: "800px" }}>
          <Text
            fontSize="32px"
            textAlign="center"
            mt={{ base: "20px", md: "50px", lg: "70px" }}
          >
            Back the project, take the ride
          </Text>
          <Container maxW="900px" mx="auto" mt="20px">
            <Text>
              UnityHub is your destination for clever innovation in tech,
              design, and more, often with special perks and pricing for early
              adopters. Back a campaign, share your ideas and feedback with the
              project team - and join the risks and rewards of bringing new
              products to life.
            </Text>
          </Container>
          <Link
            display="block"
            textAlign="center"
            mt="25px"
            _hover={{ color: "#E51075", textDecoration: "none" }}
            href="https://www.google.com/CROWDFUNDING/"
          >
            LEARN ABOUT CROWDFUNDING
          </Link>
        </Box>

        <Box w={{ base: "100%", md: "300px" }}>
          <Image
            h="350px"
            w="100%"
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
        </Box>
      </Flex>
    </div>
  );
}
