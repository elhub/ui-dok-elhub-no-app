import React from "react";
import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import Card from "../components/Card";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_APP_NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
});

export default function IndexPage({ projects }) {
  return (
    <>
      <Box>
        <Flex
          bg="colors.norway.darkblue"
          color="colors.norway.white"
          minH="14"
          py="2"
          px="4"
          align="center"
          justify={{ base: "none", md: "center" }}
        >
          dok.elhub.no
        </Flex>
        <Flex
          bg="colors.norway.blue"
          color="colors.norway.white"
          minH="14"
          py="2"
          px="4"
          align="center"
          justify={{ base: "none", md: "center" }}
        >
          Elhub markedsdokumentasjon
        </Flex>
      </Box>
      <Center>
        <HStack>
          {projects.map((project, i) => (
            <Card key={i} title={project.name}></Card>
          ))}
        </HStack>
      </Center>
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
