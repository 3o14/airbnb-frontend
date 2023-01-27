import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { githubLogIn } from "../api";

// 깃헙 연동 로그인 시 유저 검증하기
export default function GithubConfirm() {
  const { search } = useLocation();
  const confirmLogin = async () => {
    // 깃허브 client code 뽑아내기
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      await githubLogIn(code);
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} mt={40}>
      <Heading>Processing log in...</Heading>
      <Text>Don't go anywhere.</Text>
      {/* 로딩 (움직이는)아이콘 */}
      <Spinner size="lg" />
    </VStack>
  );
}