import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { Link, Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon, FaUserNinja, FaLock } from "react-icons/fa";

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color="red.500">
          <Link to={"/"}>
            <FaAirbnb size={"48"} />
          </Link>
        </Box>
        <HStack spacing={2}>
          <IconButton
            variant={"ghost"}
            aria-label="Toggle dark mode"
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={"red"}>Log out</Button>
        </HStack>
      </HStack>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <InputGroup size={"md"}>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaUserNinja />
                    </Box>
                  }
                />
                <Input variant={"filled"} placeholder="Username" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaLock />
                    </Box>
                  }
                />
                <Input variant={"filled"} placeholder="Password" /> {/* filled 단색 */}
              </InputGroup>
            </VStack>
            <ModalFooter>
                <Button mt={4} colorScheme={"red"} w="100%">
                Log in
                </Button>
            </ModalFooter>
          </ModalBody>
          {/* <ModalFooter> 우측하단에 버튼 생성하는 푸터
            <Button colorScheme={"red"}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal> 
      <Outlet />
    </Box>
  );
}
