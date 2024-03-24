import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../data/fetch-response";
import { Platform } from "./usePlatforms";
import ApiClient from "../services/api-client";

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
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          parent_platforms: gameQuery.platform?.id,
          genres: gameQuery.genre?.id,
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
        },
      }),
  });

export default useGames;
