import React from "react";

import { Box, SimpleGrid, Image, Spacer } from "@chakra-ui/react";
import ControlledCarousel, { Slider } from "../Components/Navbar/Slider";
import { Navbar } from "../Components/Navbar/Navbar";
import Productslider from "../Components/Navbar/Productslider";
import { Footer } from "../Components/Navbar/Footer";
const Homepage = () => {
  return (
    <Box>
      <Navbar />
      <ControlledCarousel />
      <Productslider />
      <Box>
        <SimpleGrid spacing={5} columns={[1, 2, 2, 3]}>
          <img
            src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bc85906-26ba-41ed-a1b0-2ff7190ba9f8.jpg&w=1920&q=75"
            alt=""
          />
          <img
            src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6d8f9700-ca7f-44ae-bdef-68cc5dc2ded1.jpg&w=1920&q=75"
            alt=""
          />
          <img
            src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F90a0f8b4-0ae4-4f0c-853d-ca54522fb509.jpg&w=1920&q=75"
            alt=""
          />
        </SimpleGrid>
        <Productslider />
        <Image
          src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg&w=1920&q=75"
          m="auto"
          borderRadius="20px"
          mb="20px"
        />
        <SimpleGrid spacing={5} columns={[1, 2, 2, 3]}>
          <img
            src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F4849cf44-c55c-4224-ba06-9dd0a5f48b67.gif&w=1920&q=75"
            alt=""
          />
          <img
            src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg&w=1920&q=75"
            alt=""
          />
          <img
            src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9f9d2095-f019-4bb5-b961-db87fab439f6.jpg&w=1920&q=75"
            alt=""
          />
        </SimpleGrid>
        <Productslider />
        <Spacer />
        <Productslider />
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
