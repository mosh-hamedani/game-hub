import { useQuery } from "react-query";
import { GameQuery } from "../App";
import { FetchResponse, Platform } from "../services/api-client";
import apiClient from "../services/api-client";
import { APICLIENT } from "../services/APICLIENTS";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const genericAPICLIENT = new APICLIENT("/games", "games", gameQuery);
  return genericAPICLIENT.getAll<Game>(); 
};

export default useGames;
