import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Center, Text, Button, Spacer } from "@chakra-ui/react";

import { Image, SimpleGrid, Box, Link, Flex, Heading } from "@chakra-ui/react";

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
  ],
};

export default function TeamFavourite() {
  const [displayCount, setDisplayCount] = useState(8);

  const handleSeeMore = () => {
    setDisplayCount(displayCount + 4);
  };
  return (
    <div>
      <Navbar />
      <Box position="relative">
        <Image
          w="100%"
          h={["250px", "300px", "350px"]}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwdGFyaW5lcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Center
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
        >
          <Text
            fontSize={["32px", "36px", "48px"]}
            fontWeight="bold"
          >
            UnityHub Team Favorites
          </Text>
        </Center>
      </Box>
      <Flex>
        <Box p="4">
          <Flex direction={{base:"column" , md:"row",lg:"row"}} justifyContent="space-around" w={{base:"100%",md:"100%",lg:"450px"}} ml="25px">
            <Text fontSize="18px">213 projects</Text>
            <Text fontSize="18px"> 156k backers</Text>
            <Text fontSize="18px">$50.8M raised</Text>
          </Flex>
        </Box>
        <Spacer />
      </Flex>
      <SimpleGrid
        columns={[1, 2, 2, 4]}
        spacing={10}
        w="90%"
        mx="auto"
        mt="50px"
        minChildWidth="260px"
      >
        {cardData.posts.slice(0, displayCount).map((data, index) => (
          <Box
            h="550px"
            border="1px"
            borderColor="gray.300"
            w="300px"
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
          >
            <Image h="270px" w="300px" src={data.image} alt="project" />
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

            {/* </Box> */}
          </Box>
        ))}
      </SimpleGrid>
      {displayCount < cardData.posts.length && (
        <Button
          display="block"
          mx="auto"
          mt="30px"
          w="200px"
          color="white"
          bg="#E51075"
          _hover={{ backgroundColor: "#E51075" }}
          onClick={handleSeeMore}
        >
          SEE MORE
        </Button>
      )}{" "}
      <Footer />
    </div>
  );
}
