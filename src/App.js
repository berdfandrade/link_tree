import Hero from "./componentes/Hero/Hero";
import LinkTree from "./componentes/HomeTree/HomeTree";
import { ChakraProvider } from "@chakra-ui/react";



function App() {
  return (
    <ChakraProvider>
      <Hero />
      <LinkTree />
    </ChakraProvider>
  );
}

export default App;
