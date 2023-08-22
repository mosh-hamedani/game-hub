import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
// import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((resp) => resp.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
