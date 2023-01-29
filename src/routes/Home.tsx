import { Grid, useEditable } from "@chakra-ui/react";
import Room from "../components/Room";
import { useEffect } from "react";
import RoomSkeleton from "../components/RoomSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
import { Link } from "react-router-dom";


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
  const { isLoading, data} = useQuery<IRoom[]>(["rooms"], getRooms);
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
      {data?.map((room) => (
        <Room
          key={room.pk}
          pk={room.pk}
          isOwner={room.is_owner}
          imageUrl={room.photos[0]?.file}
          // imageUrl={
          //   room.photos[0]?.file ??
          //   `https://source.unsplash.com/random/450x$`
          //   }
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