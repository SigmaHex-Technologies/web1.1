import React ,{useContext}from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heading, Text, Flex, Box, Image, Container } from "@chakra-ui/react";
export default function WhatweDo() {

  return (
    <div>
      <Navbar />
      <Image
        w="100%"
        h="70vh"
        src="https://media.istockphoto.com/id/1772668398/photo/woman-laptop-and-headphones-video-conference-with-presentation-or-interview-information-and.jpg?s=612x612&w=0&k=20&c=u9UM6aJQnbvzU_LexOBqaDonAbSZAyBCMkN738XLAo4="
      />
      <Container  mt="3rem">
        <Heading textAlign="center">Fund the next big thing</Heading>
        <Text textAlign="center" mt="2rem">
          UnityHub's crowdfunding campaigns are where new and groundbreaking
          products take flight, sometimes long before they hit mainstream
          availability. With thousands of campaigns launching every week,
          there's great tech, design, and much more around every corner — often
          with limited-time perks and pricing for the earliest backers. Before
          it's everywhere, it's on UintyHub.
        </Text>
        <Heading textAlign="center" mt="3.5rem">
          Join the journey from idea to market
        </Heading>
        <Text textAlign="center" mt="2rem">
          With UnityHub, you have the opportunity to support entrepreneurs and
          new technology from the earliest stages of development. Be sure to
          evaluate every campaign closely and contribute at a level you can
          afford in the event that the team is unable to complete the project as
          planned. Browse campaigns, read the stories from the entrepreneurs
          themselves, evaluate the stage of development and any potential
          production risks — and then fund the projects that you want to help
          succeed.
        </Text>
      </Container>

      
        <Flex w="90%"  justifyContent="space-around" m="auto" mt="3.5rem">
          <Box w="40%">
            <Image  h="60vh"w="90vw" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8Q_fqyeQX7ApY_wTSP9O8cEze-DENmeo7EVAQVe1lsWjKVdNe" />
          </Box>
          <Box w="50%">
            <Heading>What is a perk?</Heading>
            <Text>
              Many campaigns offer perks to say thanks to backers, in exchange
              for different contribution amounts. Perks can be objects,
              acknowledgement, a thank you, services, events or anything that
              does not violate our Terms of Use.
            </Text>
            <Text>
              Perks are listed on the right side of the Campaign page, under the
              "Back It" button. If you do not see any perks listed, the campaign
              owner may have decided not to offer any perks.
            </Text>
          </Box>
        </Flex>
     

      <Footer />
    </div>
  );
}
