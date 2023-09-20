import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function ContentTable({ articles, breadcrumb, isArticles }) {
  const numberOfArticles = articles.length;

  return (
    <Box w="sizes.container.md">
      {isArticles > 0 ? (
        articles.map((article, index) => {
          return (
            <ContentItem
              key={index}
              article={article}
              breadcrumb={breadcrumb}
              index={index}
              numberOfArticles={numberOfArticles}
            ></ContentItem>
          );
        })
      ) : (
        <Text>No articles</Text>
      )}
    </Box>
  );
}

const ContentItem = ({ article, breadcrumb, index, numberOfArticles }) => {
  let roundedTop = "0";
  let roundedBottom = "0";
  let borderBottom = "0";

  if (index === 0) {
    roundedTop = "8";
  }

  if (index === numberOfArticles - 1) {
    roundedBottom = "8";
    borderBottom = "1px";
  }

  return (
    <Link href={`/project/${breadcrumb}/article/${article ? article._id : null}`}>
      <Box
        border="1px"
        borderBottom={borderBottom}
        borderColor="gray.400"
        roundedTop={roundedTop}
        roundedBottom={roundedBottom}
        p="4"
        _hover={{ bg: "gray.100" }}
      >
        {article ? article.header : null}
      </Box>
    </Link>
  );
};
