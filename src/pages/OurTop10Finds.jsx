import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heading, Text, Flex, Box, Spacer } from "@chakra-ui/react";
import { SimpleGrid, Link, Image } from "@chakra-ui/react";


let ourTop10Card = [
  {
    image:
      "https://healthray.com/wp-content/uploads/2024/04/The-Impact-of-AI-on-Hospital-Management-Systems.webp",
    funding: "FUNDING",
    title: "AI-Driven Healthcare Management System",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://www.frevvo.com/img/banners72/track-and-manage-v.png",
    funding: "FUNDING",
    title: "ZERO PUMP: Cloud-Based Workflow Automation",
    link: "https://www.google.com/",
    rating: "$101,377 USD raised",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://www.frevvo.com/img/banners72/track-and-manage-v.png",
    funding: "FUNDING",
    title: "Neakasa M1: SaaS for Pet Care Services",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/599686594/photo/green-lasers-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=-QzyC-ESporJW71ltCwbd1PCZguQTXbjeLTjuLgyb-A=",
    funding: "FUNDING",
    title: "Casiris H6: AI-Powered Laser Security System",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/1396495196/photo/top-view-hand-of-women-hold-mobile-phone-connect-network-5g-with-icon-concept-technology.jpg?s=612x612&w=0&k=20&c=1nRps3p3boxZ8CiCAKDtbnhld5gSI_azhv1R_5VhFBs=",
    funding: "FUNDING",
    title: "Deeper Connect Air: Decentralized VPN Software",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/1446810253/photo/close-up-of-happy-couple-marriage-proposal-young-man-proposing-to-girlfriend-with-wedding-ring.jpg?s=612x612&w=0&k=20&c=5MZnwjedTQ1Fwxk5Vdw1wrA4TbXyU0hsAZJ6zTluQ4A=",
    funding: "FUNDING",
    title: "RingOne: Smart Ring Payment Solution",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/1308752994/photo/dog-stays-in-diy-container-chamber-for-oxygen-concentrator.jpg?s=612x612&w=0&k=20&c=Onm1379Ie9_Zv-wfZEtjY1tNjft3VX6FehNC_kJhLs8=",
    funding: "FUNDING",
    title: "SmartPet: IoT-Enabled Pet Feeder Software",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/1217111138/photo/a-bearded-man-use-the-smartphone-for-shopping-online.jpg?s=612x612&w=0&k=20&c=jO6G4LupeNOTPMjL2Td1GrkOW2FAXbH96oU4nZXohlw=",
    funding: "FUNDING",
    title: "AYANEO POCKET: Mobile Game Development Platform",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/499226969/photo/laptops-against-world-map-background.jpg?s=612x612&w=0&k=20&c=IkLCH-Aq2-umwaXl49sXSg7XC64z2yzYKOTMOvQoQv4=",
    funding: "FUNDING",
    title: "Paperlike: E-Ink Monitor Software Interface",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },
  {
    image:
      "https://media.istockphoto.com/id/1545399259/photo/cat-litter-box.jpg?s=612x612&w=0&k=20&c=CkKDEKgiHuCqiEubphS_iJl74gy428p-6lR6fcUBIZE=",
    funding: "FUNDING",
    title: "PetSnowy: Advanced Litter Box Software",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },
];


export default function OurTop10Finds() {
  return (
    <div border="1px">
      <Navbar />
      <Box bg="rgb(245,245,245)">
        <hr
          style={{ border: "2px solid #E51075", width: "10%", margin: "auto" }}
        />

        <Heading mt="30px" textAlign="center" as="h1">
          10 Cool & Clever Finds
        </Heading>
        <Text
          mt={{ base: "15px", md: "25px" }}
          w={{ base: "100%", md: "100%",lg:"100%" }}
          mx="auto"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
          Discover your next "a-ha" moment in our roundup of standout projects,
          from live crowdfunding & InDemand campaigns to innovative products
          shiping now.
        </Text>
        <Flex
          // w="500px"
          w={{base:"100%",md:"500px",lg:"500px"}}
          align={{base:"center"}}
          mx="auto"
          mt="15px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "160px" }}
            bg="#405D9D"
            p="4"
            borderRadius="2px"
            w="160px"
            h="40px"
            fontSize="13px"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Image
              h="20px"
              src="https://cdn-icons-png.flaticon.com/128/1240/1240964.png"
            />
            <Text color="white">SHARE</Text>
          </Box>
          <Spacer mt={{ base: "8px", md: "0" }} />

          <Box
            w={{ base: "100%", md: "160px" }}
            bg="#2C99D7"
            p="4"
            borderRadius="2px"
            w="160px"
            h="40px"
            fontSize="13px"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Image
              h="20px"
              src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png"
            />
            <Text color="white">TWEET</Text>
          </Box>
          <Spacer mt={{ base: "8px", md: "0" }} />

          <Box
            w={{ base: "100%", md: "160px" }}
            _hover={{ backgroundColor: "#E51075" }}
            p="4"
            border="2px"
            borderColor="#E51075"
            borderRadius="2px"
            w="160px"
            h="40px"
            fontSize="16px"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Image
              h="20px"
              src="https://cdn-icons-png.flaticon.com/128/4340/4340223.png"
            />

            <Text color="#E51075" _hover={{ color: "white" }}>
              FOLLOW
            </Text>
          </Box>
        </Flex>

        <SimpleGrid
          columns={[1, 1, 2]}
          //  columns={2}
          spacing={1}
          w="90%"
          mx="auto"
        >
          {ourTop10Card.map((data, index) => (
            <Box
              h="550px"
              border="1px"
              borderColor="gray.300"
              w="580px"
              ml=""
              mt="50"
              key={data.id}
              position="relative"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
              w={["100%", "100%", "78%", "95%"]}
            >
              <Image h="300px" w="580px" src={data.image} alt="project" />
              <Text
                fontSize="12px"
                color="#088366"
                fontWeight="bold"
                ml="15px"
                mt="20px"
              >
                {data.funding}
              </Text>
              <Text
                fontSize="18px"
                color="#2A2A2A"
                fontWeight="bold"
                ml="15px"
                mt="7px"
              >
                <Link href={data.link}>{data.title}</Link>
              </Text>
              <Flex justifyContent="space-between" w="92%" mx="auto">
                <Box display="flex">
                  <Heading as="h3" size="md" mt="70px">
                    {data.rating}
                  </Heading>
                  <Text mt="70px">{data.usdRaised}</Text>
                </Box>
                <Text mt="70px">{data.percent}</Text>
              </Flex>
              <hr
                style={{
                  width: "90%",
                  margin: "auto",
                  border: "4px solid #35CA97",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
}
