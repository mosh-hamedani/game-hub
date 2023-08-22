import { useQuery } from "react-query";
import { GameQuery } from "../App";
import { FetchResponse , Platform} from "../services/api-client";
import apiClient from "../services/api-client";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((resp) => resp.data);
    },
    staleTime:1 * 60 * 1000 , // 1 min
  });
};

export default useGames;
