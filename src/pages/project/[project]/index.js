import React from "react";
import Head from "next/head";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidepanel from "../../../components/Sidepanel";
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

  return {
    props: {
      breadcrumb,
      articles,
    },
  };
}

const IdPage = ({ breadcrumb, articles }) => {
  return (
    <>
      <Head>
        <title>{breadcrumb}</title>
      </Head>
      <Flex>
        <Sidepanel breadcrumb={breadcrumb} articles={articles}></Sidepanel>
        <Box rounded="4" w="sizes.container.lg" h="calc(100vh - 7rem)" mx="2" align="center">
          {articles.map((article, index) => {
            return <Box key={index}>{article.header}</Box>;
          })}
        </Box>
      </Flex>
    </>
  );
};

export default IdPage;
