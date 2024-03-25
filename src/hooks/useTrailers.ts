import { useQuery } from "@tanstack/react-query";
import Trailer from "../models/trailer";
import ApiClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
