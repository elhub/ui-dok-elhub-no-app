import React from "react";
import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";

export default function Sidepanel({ breadcrumb, articles }) {
  return (
    <Flex flexDir="column" minH="calc(100vh - 80px)" w="400px" borderRight="1px" borderColor="gray.300" gap="8">
      <Link href={`/project/${breadcrumb}`}>
        <Heading as="h4" size="md" mt="16" ml="20">
          {breadcrumb}
        </Heading>
      </Link>

      <UnorderedList fontSize="md" ml="24">
        {articles.map((article, i) => (
          <Link key={i} href={`/project/${breadcrumb}/article/${article._id}`}>
            <ListItem>{article.header}</ListItem>
          </Link>
        ))}
      </UnorderedList>
    </Flex>
  );
}
