import "@/styles/globals.css";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors, sizes } from "@/theme";

const chakraTheme = extendTheme({
  colors,
  sizes,
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
