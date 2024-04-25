import React from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Icon,
  VStack,
  Grid,
  Stack,
} from "@chakra-ui/react";
import {
  AiFillAndroid,
  AiFillApple,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { footerData } from "../../utils/data";

export function Footeritems({ title, des1, des2, des3 }) {
  return (
    <VStack alignItems={"flex-start"} spacing="1">
      <Heading size="sm" textAlign={"left"} fontSize="16px">
        {title}
      </Heading>
      <Text textAlign={"left"} fontSize="14px">
        {des1}
      </Text>
      <Text textAlign={"left"} fontSize="14px">
        {des2}
      </Text>
      <Text textAlign={"left"} fontSize="14px">
        {des3}
      </Text>
    </VStack>
  );
}

export default function Footer() {
  return (
    <Box
      as="footer"
      pl="5%"
      pr="5%"
      pt="10px"
      pb="10px"
      bg="gray.200"
      position="relative"
      bottom="0"
      left="0"
      right="0"
      zIndex="10"
      width="100%"
      height="100%"
    >
      <Stack
        justifyContent={"space-between"}
        pb="10px"
        flexDir={{ base: "column", md: "row" }}
      >
        <Heading size={"sm"} fontSize="16px">
          We are here to help you!
        </Heading>
        <HStack alignItems={"center"} spacing="3">
          <Text fontSize="14px">Go Mobile:</Text>
          <Box>
            <Icon as={AiFillAndroid} boxSize={6} />
            <Icon as={AiFillApple} boxSize={6} />
          </Box>
          <Text fontSize="14px">Follow us on:</Text>
          <Box>
            <Icon color={"blue"} as={AiFillFacebook} boxSize={6} />
            <Icon color={"blue.400"} as={AiFillLinkedin} boxSize={6} />
            <Icon color={"skyblue"} as={AiFillTwitterSquare} boxSize={6} />
          </Box>
        </HStack>
      </Stack>
      <Box>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          }}
          gap={2}
        >
          {footerData.map((el, i) => (
            <Footeritems key={i} {...el} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
