import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function ContentTable({ articles, breadcrumb }) {
  const numberOfArticles = articles.length;

  return (
    <Box w="sizes.container.md">
      {articles.map((article, index) => {
        return (
          <ContentItem
            key={index}
            article={article}
            breadcrumb={breadcrumb}
            index={index}
            numberOfArticles={numberOfArticles}
          ></ContentItem>
        );
      })}
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
    <Link href={`/project/${breadcrumb}/article/${article._id}`}>
      <Box
        border="1px"
        borderBottom={borderBottom}
        borderColor="gray.400"
        roundedTop={roundedTop}
        roundedBottom={roundedBottom}
        p="4"
        _hover={{ bg: "gray.100" }}
      >
        {article.header}
      </Box>
    </Link>
  );
};
