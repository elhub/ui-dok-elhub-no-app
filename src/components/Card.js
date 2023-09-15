import React from "react";
import { Center, Heading, Stack } from "@chakra-ui/react";

const Card = ({ title }) => {
  return (
    <Center p="4" border="1px" borderColor="gray.200" rounded="8" boxShadow="lg" w="80" h="48">
      <Stack spacing="4" align="center">
        <Heading fontWeight="semibold" color="green.600">
          elhub
        </Heading>
        <Heading as="h4" size="md" mb="-4" fontWeight="semibold">
          {title}
        </Heading>
      </Stack>
    </Center>
  );
};

export default Card;
