import React from "react";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Sidepanel from "../components/Sidepanel";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ovv3c751", // process.env.NEXT_APP_NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
});

export async function getServerSideProps(context) {
  const { id } = context.query;

  const projects = await client.fetch(`*[_type == "project"]`);

  return {
    props: {
      id,
      projects,
    },
  };
}

const IdPage = ({ id, projects }) => {
  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <Flex>
        <Sidepanel projects={projects}></Sidepanel>
        <Box rounded="4" w="sizes.container.lg" h="calc(100vh - 7rem)" mx="2" align="center">
          {id}
        </Box>
      </Flex>
    </>
  );
};

export default IdPage;
