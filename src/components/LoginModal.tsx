import {useForm} from "react-hook-form"
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { FaUserNinja, FaLock } from "react-icons/fa";
  import SocialLogin from "./SocialLogin"
  
  interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  interface IForm {
    username: string;
    password: string;
  }

  
  export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IForm>();
    const onSubmit = (data: IForm) => {
      console.log(data);
    };
    return (
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <InputGroup size={"md"}>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaUserNinja />
                    </Box>
                  }
                />
                <Input
                  isInvalid={Boolean(errors.username?.message)} // username이 입력되지 않았을 경우 아래 경고메시지를 빨간색으로 띄우기
                  {...register("username", {
                    required: "Please write a username", // (html이 아니라)js에서의 required 설정
                  })}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaLock />
                    </Box>
                  }
                />
                <Input
                  isInvalid={Boolean(errors.password?.message)} // password가 입력되지 않았을 경우 아래 경고메시지를 빨간색으로 띄우기
                  {...register("password", {
                    required: "Please write a password", // (html이 아니라)js에서의 required 설정
                  })}
                />
              </InputGroup>
            </VStack>
            <Button type="submit" mt={4} colorScheme={"red"} w="100%">
              Log in
            </Button>
            <SocialLogin />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }