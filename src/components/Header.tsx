import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignupModal"
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();

  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun); //  컴포넌트는 무조건 대문자로 시작해야 함
  const toast = useToast(); // chakri UI에서 알림창 toast 사용하기 (로그아웃 확인 알림창)
  const queryClient = useQueryClient();
  const onLogOut = async () => {
    const toastId = toast({
      title: "Login out...", // 메인 문구
      description: "Sad to see you go...", // 상세 문구
      status: "loading", // 알림 상태(아이콘)) 설정 [상태: success, loading, error, info]
      position: "bottom-right", // 위치
    });
    await logOut();
    queryClient.refetchQueries(["me"]);
    toast.update(toastId, {
      status: "success",
      title: "Done!",
      description: "See you later!",
    });
  };

  return (
    <Stack // 반응형으로 HStack VStack으로 변형하기 위해 기본은 Stack으로 사용해둠
      justifyContent={"space-between"}
      alignItems="center"
      py={5}
      px={40}
      direction={{
        sm: "column",
        md: "row",
      }}
      spacing={{
        sm: 4,
        md: 0,
      }}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <Link to={"/"}>
          <FaAirbnb size={"48"} />
        </Link>
      </Box>
      <HStack spacing={2}>
        <IconButton
            onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<Icon />}
        />
        {/* <이중 if문>
        if 로딩이 끝났을 경우
          if 로그인이 된 경우 */}
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log in</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>
                  Sign up
                </Button>
              </LightMode>
            </>
          ) : (
            // chakra UI에서 메뉴 컴포넌트 사용하기
            <Menu>
              {/* 메뉴 버튼 : 클릭하면 메뉴가 열림*/}
              <MenuButton> 
                <Avatar name={user?.name} src={user?.avatar} size={"md"} />
              </MenuButton>
              {/* 메뉴 리스트 */}
              <MenuList>
                {/* 메뉴 리스트 안의 메뉴 아이템 */}
                <MenuItem onClick={onLogOut}>Log out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
}