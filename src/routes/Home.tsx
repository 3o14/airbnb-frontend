import { FaStar, FaRegHeart  } from "react-icons/fa";
import { Box, Grid, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";

interface IPhoto {
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const fetchRooms = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/rooms");
    const json = await response.json();
    setRooms(json);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchRooms();
  }, []);
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
     {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {rooms.map((room) => (
        <Room
          // imageUrl={room.photos[0].file}
          imageUrl={
            room.photos[0]?.file ??
            `https://source.unsplash.com/random/450x$`
            }
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  );
}