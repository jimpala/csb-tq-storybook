import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import TestComponent from "./components/TestComponent";


function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <TestComponent />
    </ChakraProvider>
  );
}

export default App;
