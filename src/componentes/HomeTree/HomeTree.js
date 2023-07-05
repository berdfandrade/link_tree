import {
  Box,
  Text,
  Link,
  VStack,
  ChakraProvider,
  Center,
} from "@chakra-ui/react";



import Main from "./Accordions";

const LinkTree = () => {
  return (
      
      <VStack spacing={4} minHeight="400px">
        <Box w="100%" p={6} maxW="900px">
        
          <Center>
            <Text fontSize="1xl" fontWeight="bold" mb={7}>
              @bernadofandrade
            </Text>
          </Center>
          <Main/>
        </Box>
      </VStack>
 
  );
};

export default LinkTree;
