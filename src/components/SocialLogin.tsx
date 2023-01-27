import { FaComment, FaGithub } from "react-icons/fa";
import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function SocialLogin() {
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
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=5195598d392601f20eea&scope=read:user,user:email"
          w="100%"
          leftIcon={<FaGithub />}
        >
          Continue with Github
        </Button>
        {/* 카카오 로그인 */}
        <Button w="100%" leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
