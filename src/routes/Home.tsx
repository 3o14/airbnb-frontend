import { FaStar, FaRegHeart  } from "react-icons/fa";
import {
  Box,
  Grid,
  Button,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Room from "../components/Room";


export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10, // 모바일 버전
        lg: 40, // 큰 화면 버전
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{ // 화면 크기별 레이아웃 형태 (반응형으로 만들기)
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
     {[
        1, 2, 3, 4, 56, 7, 7, 7, 6, 6, 6, 6, 66, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2,
      ].map((index) => (
        <Room key={index} />
      ))}
    </Grid>
  );
}