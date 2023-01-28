import { FaComment, FaGithub } from "react-icons/fa";
import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function SocialLogin() {
  const kakaoParams = {
    client_id: "99624fd3a7cf3d03da77b4d288d81241",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        {/* 깃헙 로그인 */}
        <Button 
          as="a" // <a></a>(anchor)로서 사용하겠다는 의미
          href="https://github.com/login/oauth/authorize?client_id=768dec930d2aa450d693&scope=read:user,user:email" // a태그 url
          // href url : [github 문서에서 제공해준 url] ? [client ID] & [scope]
          // scope란, 사용자로부터 얻고 싶은 정보를 말함 (scope 설정이 없으면 public 정보만 받을 수 있음)
          w="100%"
          leftIcon={<FaGithub />}
        >
          Continue with Github
        </Button>
        {/* 카카오 로그인 */}
        <Button
          as="a"
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w="100%"
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
