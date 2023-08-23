import genres from "../data/genres";
import { apiClient } from "../services/api-client";
import { useQuery } from "react-query";
import  ms  from "ms";


const apiClientInstance = new apiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => 
useQuery({
  queryKey:['genres'],
  queryFn:apiClientInstance.getAll,
  staleTime: ms('24h'),
  initialData:genres
});


export default useGenres;
