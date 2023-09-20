import React from "react";
import Head from "next/head";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Sidepanel from "../../../components/Sidepanel";
import ContentTable from "../../../components/ContentTable";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ovv3c751", // process.env.NEXT_APP_NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
});

export async function getServerSideProps(context) {
  const { project: breadcrumb } = context.query;

  const articles = await client.fetch(`*[breadcrumb == "${breadcrumb}" && _type == "project"].articles[]->`);
  const project = await client.fetch(`*[_type == "project" && breadcrumb == "${breadcrumb}"]`);

  return {
    props: {
      breadcrumb,
      articles,
      project: project[0],
    },
  };
}

const IdPage = ({ breadcrumb, articles, project }) => {
  const isArticles = articles.length > 0 && articles[0] !== null;

  return (
    <>
      <Head>
        <title>{breadcrumb}</title>
      </Head>
      <Flex>
        <Sidepanel isArticles={isArticles} breadcrumb={breadcrumb} articles={articles}></Sidepanel>
        <Flex m="16" ml="32" flexDir="column" gap="8" w="sizes.container.lg">
          <Heading mb="8">{project.name}</Heading>
          <Heading as="h4" size="md">
            Description
          </Heading>
          <Text mb="8">{project.description}</Text>

          <Heading as="h4" size="md">
            Content
          </Heading>

          <ContentTable isArticles={isArticles} articles={articles} breadcrumb={breadcrumb}></ContentTable>
        </Flex>
      </Flex>
    </>
  );
};

export default IdPage;
