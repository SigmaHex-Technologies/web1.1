import React,{useContext} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Heading, Text, Box, Flex } from "@chakra-ui/react";
import { SimpleGrid, Link, Image } from "@chakra-ui/react";
import Login from "../pages/Login";
import { LoginContext } from "../context/LoginContextProvider";

let ourTop10Card = [
 
 

  {
    image:
      "https://media.istockphoto.com/id/948682406/photo/tabby-cat-sitting-in-a-litter-box-and-look-to-the-camera.jpg?s=612x612&w=0&k=20&c=I3GSn0YqVUIomtaQEW7fUHErgwkTQrAqGVNhTK5t1tg=",
    funding: "FUNDING",
    title: "Neakasa M1: Open-Top Self-Cleaning Cat Litter Box",
    link: "https://www.google.com/",

    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/599686594/photo/green-lasers-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=-QzyC-ESporJW71ltCwbd1PCZguQTXbjeLTjuLgyb-A=",
    funding: "FUNDING",
    title: "Casiris H6:4K UST Tri-color Laser Project",
    link: "https://www.google.com/",
    rating: "$101,377 ",

    usdRaised: "USD raised",
    percent: "107%",
  },

  {
    image:
      "https://media.istockphoto.com/id/1396495196/photo/top-view-hand-of-women-hold-mobile-phone-connect-network-5g-with-icon-concept-technology.jpg?s=612x612&w=0&k=20&c=1nRps3p3boxZ8CiCAKDtbnhld5gSI_azhv1R_5VhFBs=",
    funding: "FUNDING",
    title: "Deeper Connect Air:Portable Decentralized VPN",
    link: "https://www.google.com/",
    rating: "$101,377 ",

    usdRaised: "USD raised",
    percent: "107%",
  },
  {
    image:
      "https://media.istockphoto.com/id/187979924/photo/hospital-interior.jpg?s=612x612&w=0&k=20&c=wpmYeqLYKSfyShAOZJ5V59fHg69GTFsIFDMfy6ASCBE=",
    funding: "FUNDING",
    title: "Movably Pro-The cure for the common chair",
    link: "https://www.google.com/",
    rating: "$101,377 ",
    usdRaised: "USD raised",
    percent: "107%",
  },


  {
    image:
      "https://media.istockphoto.com/id/1446810253/photo/close-up-of-happy-couple-marriage-proposal-young-man-proposing-to-girlfriend-with-wedding-ring.jpg?s=612x612&w=0&k=20&c=5MZnwjedTQ1Fwxk5Vdw1wrA4TbXyU0hsAZJ6zTluQ4A=",
    funding: "FUNDING",
    title: "RingOne-world latest and most advanced smartring",
    link: "https://www.google.com/",
    rating: "$101,377 ",

    usdRaised: "USD raised",
    percent: "107%",
  },
  {
    image:
      "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/hhlde8sfrriop1mrkqpr",

    funding: "FUNDING",
    title: "ZERO PUMP: World smallest pump for sleeping pads",
    link: "https://www.google.com/",
    rating: "$101,377 USD raised",
    usdRaised: "USD raised",
    percent: "107%",
  }
];

export default function Startacompaign() {
  const {onOpenLogin} =useContext(LoginContext)

  return (
    <div>
      <Login/>
      <Navbar />
      <Container  h="100vh" mt="10rem">
        <Heading textAlign="center">Every fundraise has its beginning</Heading>
        <Text textAlign="center" mt="2rem" fontSize="20px">
          Where does your journey begin?
        </Text>
        <Flex  mt="2rem" h="20vh" border="2px solid lightgray" borderRadius="7px">
          <Box >
            <Text ml="1rem" mt="1rem" fontSize="20px" fontWeight="bold">Prelaunch</Text>
            <Text ml="1rem" mt="1rem">Collect emails, gain exposure and grow your audience</Text>
          </Box>
          <Image onClick={onOpenLogin}  src="https://cdn-icons-png.flaticon.com/128/9312/9312239.png"/>
        </Flex>

        <Flex  mt="1rem" h="20vh" border="2px solid lightgray" borderRadius="7px">
          <Box>
            <Text ml="1rem" mt="1rem" fontSize="20px" fontWeight="bold">Crowdfunding</Text>
            <Text ml="1rem" mt="1rem">Launch your campaign and raise funds from our backers</Text>
          </Box>
          <Image onClick={onOpenLogin}   src="https://cdn-icons-png.flaticon.com/128/9312/9312239.png"/>
        </Flex>

        <Heading mt="5rem" textAlign="center">
          We’ve changed the way your ideas become reality
        </Heading>
      </Container>

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

{/* <Container border="2px solid black" w="600px"> */}
  <Heading textAlign="center" mt="5rem">Why Indiegogo?</Heading>
  <Flex w="90%" m="auto"  mt="3rem">
     <Box >
      <Image display="block" m="auto"h="7vh" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJpKPvqJbBEtKgd9Pf8kwWBPmTfFxzjLzcS60xFB2o5C3KCokg"/>
      <Text mt="2rem" textAlign="center" fontSize="20px" fontWeight="bold">Pre- and post- campaign tools</Text>
      <Text mt="2rem" textAlign="center" color="gray">A robust set of tools and services to maximize your campaign’s success.</Text>

     </Box>
     <Box>
     <Image display="block" m="auto"h="7vh" h="7vh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNSZPYKYXKPSPoW09UdHwI9z2gKxmVbwzkPtegKV9LMBOYIJ9"/>
      <Text  mt="2rem" textAlign="center" fontSize="20px" fontWeight="bold">Flexible funding options</Text>
      <Text mt="2rem" textAlign="center" color="gray">Keep your funds even if you don’t meet your target with flex funding.</Text>
     </Box>

     <Box>
     <Image display="block" m="auto"h="7vh" h="7vh" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWoL2iW70oc2vWfabzDBrBnBNG_fClWQ3C1bDcSmmoqoVTEklz"/>
      <Text  mt="2rem" textAlign="center" fontSize="20px" fontWeight="bold">Extend your campaign with InDemand</Text>
      <Text mt="2rem" textAlign="center" color="gray">Continue raising funds after your campaign ends and receive monthly disbursements.</Text>
     </Box>

  </Flex>
{/* </Container> */}

      <Footer />
    </div>
  );
}
