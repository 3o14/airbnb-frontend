import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api";
import { IUser } from "../types";

export default function useUser() {
    const { isLoading, data, isError } = useQuery<IUser>(["me"], getMe, {
    retry: false, // 자동으로 재시도를 반복하는 reactQuery에게 한 번만 시도해도 된다는 것을 알려줌 
  });
  return {
    userLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}