import React from "react";
import Head from "next/head";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Sidepanel from "../../../../components/Sidepanel";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ovv3c751", // process.env.NEXT_APP_NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
});

export async function getServerSideProps(context) {
  const { project: breadcrumb, article: id } = context.query;

  const articles = await client.fetch(`*[_id == "${id}" && _type == "article"]`);
  const sidepanelArticles = await client.fetch(`*[breadcrumb == "${breadcrumb}" && _type == "project"].articles[]->`);

  return {
    props: {
      breadcrumb,
      article: articles[0],
      sidepanelArticles,
    },
  };
}

const IdPage = ({ article, breadcrumb, sidepanelArticles }) => {
  return (
    <>
      <Head>
        <title>{article._id}</title>
      </Head>
      <Flex>
        <Sidepanel breadcrumb={breadcrumb} articles={sidepanelArticles}></Sidepanel>
        <Flex m="16" ml="32" flexDir="column" gap="16" w="sizes.container.lg">
          {article.header ? <Heading>{article.header}</Heading> : <Text>Header missing</Text>}
          {article.paragraph && article.paragraph.length > 0 ? (
            article.paragraph.map((el, i) => {
              return (
                <Text key={i} color="black">
                  {el.children[0].text}
                </Text>
              );
            })
          ) : (
            <Text>Paragraph missing</Text>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default IdPage;
