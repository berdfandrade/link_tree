import {
  Text,
  Tag,
  Flex,
  Icon,
  useDisclosure,
  Button,
  Center,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function AstroCard({ nome, icone, planeta, cor, descricao }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{nome}</ModalHeader>
          <Center>
            <Icon ml={6} mt={2} boxSize={10} as={planeta} />
            <Icon boxSize={20} as={icone} />
          </Center>

          <ModalCloseButton />
          <ModalBody>
            <Text p={6}>{descricao}</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant={"ghost"} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Tag
        p={4}
        onClick={onOpen}
        cursor={"pointer"}
        colorScheme={cor}
        justifyContent={"center"}
      >
        <Flex flexDirection={"column"}>
          <Icon boxSize={20} as={icone} />
          <Icon ml={6} mt={2} boxSize={"30px"} as={planeta} />
          <Text ml={1} mt={4}>
            {nome}
          </Text>
        </Flex>
      </Tag>
    </>
  );
}

export default AstroCard;
