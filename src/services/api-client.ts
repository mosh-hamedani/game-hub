import axios from "axios";
import { GameQuery } from "../App";
import { FetchResponse , Platform} from "../services/api-client";
import { useQuery } from "react-query";
import { Game } from "../hooks/useGames";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e9fa37ef569498da299de5a59e06105",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export class APICLIENT{
  endpoint : string;
  querykey : string;
  gameQuery : GameQuery | undefined;
  constructor( endpoint : string , queryKey : string , gameQuery : GameQuery | undefined)
  {
    this.endpoint = endpoint;
    this.querykey = queryKey;
    this.gameQuery = gameQuery;
  }
  getAll()
  {
    return useQuery({
      queryKey:[ this.querykey , this.gameQuery],

    })      
  }
}