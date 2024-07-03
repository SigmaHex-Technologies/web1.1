import React, { useState } from "react";
import {
  Text,
  Image,
  SimpleGrid,
  Box,
  Link,
  Flex,
  Heading,
} from "@chakra-ui/react";


let cardData = {
  posts: [
    {
      image:
        "https://cdn-hhomn.nitrocdn.com/owkBmdjkYWIKArhpTrYLoSVIZUZjkLka/assets/images/optimized/rev-a5bdab0/hive.com/wp-content/uploads/2022/04/creative-project-management.png",
      funding: "FUNDING",
      title: "Innovative Project Management Tool",
      link: "https://www.example.com/",
      description:
        "A comprehensive tool for managing and tracking project progress with real-time updates.",
      category: "SOFTWARE",
      link2:
        "https://www.example.com/",
      rating: "$200,000 ",
      usdRaised: "USD raised",
      percent: "75%",
    },

    {
      image:
        "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/aicustomerservicesoftware44.png",
      funding: "FUNDING",
      title: "AI-Powered Customer Support",
      link: "https://www.example.com/)",
      description:
        "An AI-based solution to provide round-the-clock customer support with natural language processing.",
      category: "SOFTWARE",
      link: "https://www.example.com/",
      rating: "$150,000 ",
      usdRaised: "USD raised",
      percent: "90%",
    },

    {
      image:
        "https://cdn.mos.cms.futurecdn.net/ocAnQJvR5NCgqzq3Sg3yr5-1200-80.png",
      funding: "FUNDING",
      title: "Cloud Storage and Backup Service",
      link: "https://www.example.com/)",
      description: "Secure and scalable cloud storage solution for businesses.",
      category: "SOFTWARE",
      // link:"",
      rating: "$120,000 ",
      usdRaised: "USD raised",
      percent: "65%",
    },

    {
      image:
        "https://nimbusweb.me/wp-content/uploads/2023/11/Main-4-5.jpg",
      funding: "FUNDING",
      title: "Real-time Collaboration Platform",
      link: "https://www.example.com/)",
      description: "A platform that allows teams to collaborate in real-time from anywhere.",
      category: "SOFTWARE",
      rating: "$180,000 ",
      usdRaised: "USD raised",
      percent: "85%",
    },
  ],
};


export default function UserCards() {
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(cardData.posts.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const visibleCards = cardData.posts.slice(startIndex, endIndex);

  return (
    <div
      style={{
        width: "92%",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        position: "relative",
      }}
    >
      <Text mb="50px" fontSize="28px">
        Popular Projects
      </Text>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
        {visibleCards.map((data, index) => (
          <Box
            key={data.id}
            border="1px"
            borderColor="gray.300"
            position="relative"
            style={{
              width: "100%",
              transition: "transform 0.3s ease",
              marginBottom: "20px", 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Image src={data.image} alt="project" h="270px" w="100%" />
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
            <Text fontSize="14px" color="#6A6A6A" ml="15px" mt="7px">
              {data.description}
            </Text>
            <Text
              fontSize="14px"
              color="#6A6A6A"
              ml="15px"
              mt="7px"
              _hover={{ color: "#E51075" }}
            >
              <Link href={data.link2}>{data.category}</Link>
            </Text>
            <Flex justifyContent="space-between" w="92%" mx="auto">
              <Box display="flex">
                <Heading as="h3" size="md" mt="20px">
                  {data.rating}
                </Heading>
                <Text mt="20px">{data.usdRaised}</Text>
              </Box>
              <Text mt="20px">{data.percent}</Text>
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
      <Image
        src="https://cdn-icons-png.flaticon.com/128/7945/7945195.png"
        h="50px"
        onClick={handlePrevious}
        disabled={currentPage === 0}
        position="absolute"
        left="-20px"
        bottom="50%"
        transform="translateY(50%)"
        zIndex="1"
        cursor="pointer"
      />
      <Image
        src="https://cdn-icons-png.flaticon.com/128/7945/7945189.png"
        h="50px"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        position="absolute"
        right="-20px"
        bottom="50%"
        transform="translateY(50%)"
        zIndex="1"
        cursor="pointer"
      />
    </div>
  );
}
