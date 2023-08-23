import { useInfiniteQuery } from "react-query";
import { GameQuery } from "../App";
import { FetchResponse, Platform } from "../services/api-client";
import { apiClient } from "../services/api-client";
import  ms  from "ms";

const apiClientInstance = new apiClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery, pageSize: number) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    staleTime: ms('24h'),
    queryFn: ({ pageParam }) =>
      apiClientInstance.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
