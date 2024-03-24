import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { Platform } from "./useGames";
import { FetchResponse } from "./useData";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { results: platforms, count: platforms.length },
  });

export default usePlatforms;
