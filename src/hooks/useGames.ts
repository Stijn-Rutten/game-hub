import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          parent_platforms: gameQuery.platformId,
          genres: gameQuery.genreId,
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"),
  });

export default useGames;
