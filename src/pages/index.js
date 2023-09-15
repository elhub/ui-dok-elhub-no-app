import React from "react";
import { Box, Center, Flex, Heading, Input, Wrap } from "@chakra-ui/react";
import Card from "../components/Card";
import { createClient } from "next-sanity";
import Link from "next/link";

const client = createClient({
  projectId: "ovv3c751", // process.env.NEXT_APP_NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
});

export default function IndexPage({ projects }) {
  return (
    <>
      <Flex flexDir="column">
        <Flex boxShadow="lg" color="green.600" minH="20" py="2" px="4" align="center" justify={{ base: "none", md: "left" }}>
          <Link href="/">
            <Box ml="4" fontWeight="bold">
              dok.elhub.no
            </Box>
          </Link>
        </Flex>
        <Flex
          flexDir="column"
          gap="8"
          bgGradient="linear(to-r, purple.900, 70%, cyan.400, cyan.200)"
          color="white"
          minH="96"
          py="2"
          px="4"
          align="center"
          justify={{ base: "none", md: "center" }}
        >
          <Heading as="h1" size="4xl" noOfLines={3} fontWeight="400" p="4">
            Elhub markedsdokumentasjon
          </Heading>
          <Input placeholder="Search" size="lg" type="search" w="560px" bg="white" color="black" rounded="full" />
        </Flex>
      </Flex>
      <Box minH="calc(100vh - 464px)">
        <Center p="8">
          <Wrap maxW="1024px" spacingY="6" spacingX="8">
            {projects.map((project, i) => (
              <Link key={i} href={`/${project.breadcrumb}`}>
                <Card title={project.name}></Card>
              </Link>
            ))}
          </Wrap>
        </Center>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const revalidate = 10; // In seconds
  const projects = await client.fetch(`*[_type == "project"]` /* , { next: { revalidate } } */);

  return {
    props: {
      projects,
    },
    revalidate,
  };
}
