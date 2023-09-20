import React from "react";
import { Flex, Heading, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Sidepanel({ breadcrumb, articles, isArticles }) {
  return (
    <Flex flexDir="column" minH="calc(100vh - 80px)" w="400px" borderRight="1px" borderColor="gray.300" gap="8">
      <Link href={`/project/${breadcrumb}`}>
        <Heading as="h4" size="md" mt="16" ml="20">
          {breadcrumb}
        </Heading>
      </Link>

      <UnorderedList fontSize="md" ml="24">
        {isArticles ? (
          articles.map((article, i) => (
            <Link key={i} href={`/project/${breadcrumb}/article/${article ? article._id : null}`}>
              <ListItem>{article ? article.header : null}</ListItem>
            </Link>
          ))
        ) : (
          <Text>No articles</Text>
        )}
      </UnorderedList>
    </Flex>
  );
}
