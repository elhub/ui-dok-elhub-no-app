import React from "react";
import { Center, Heading } from "@chakra-ui/react";

const Card = ({ title }) => {
  return (
    <Center p="4" bg="cyan.100">
      <Heading>{title}</Heading>
    </Center>
  );
};

export default Card;
