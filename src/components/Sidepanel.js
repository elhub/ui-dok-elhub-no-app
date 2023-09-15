import React from "react";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";

export default function Sidepanel({ breadcrumb, articles }) {
  return (
    <Box minH="calc(100vh - 80px)" w="400px" borderRight="1px" borderColor="gray.300">
      <UnorderedList mt="16" ml="24" fontSize="md">
        {articles.map((article, i) => (
          <Link key={i} href={`/project/${breadcrumb}/article/${article._id}`}>
            <ListItem>{article.header}</ListItem>
          </Link>
        ))}
      </UnorderedList>
    </Box>
  );
}
