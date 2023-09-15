import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex boxShadow="lg" color="green.600" minH="20" py="2" px="4" align="center" justify={{ base: "none", md: "left" }}>
      <Link href="/">
        <Box ml="4" fontWeight="bold">
          dok.elhub.no
        </Box>
      </Link>
    </Flex>
  );
};

export default Header;
