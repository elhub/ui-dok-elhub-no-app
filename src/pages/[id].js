import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export async function getServerSideProps(context) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}

const IdPage = ({ id }) => {
  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>

      <Box rounded="4" w="sizes.container.lg" h="calc(100vh - 7rem)" mx="2" align="center">
        {id}
      </Box>
    </>
  );
};

export default IdPage;
