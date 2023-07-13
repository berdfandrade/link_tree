import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import * as TB from "react-icons/tb"

function Footer() {
  return (
    <Box bg="gray.200" mt={"100%"}>
      <Flex justify="center">
        <Text>          <Button p={3} bg={"black"} borderRadius={"full"} ml={4}>
            <Icon color="white" boxSize={7} as={TB.TbKeyboard} />
            <Text color="white" ml={2} mt={1} fontSize={"sm"}>Site Profissional</Text>
          </Button></Text>
      </Flex>
    </Box>
  );
}

export default Footer;