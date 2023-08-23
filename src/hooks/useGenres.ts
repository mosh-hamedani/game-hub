import genres from "../data/genres";
import { apiClient } from "../services/api-client";
import { useQuery } from "react-query";

const apiClientInstance = new apiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClientInstance.getAll,
    staleTime: 1 * 60 * 60 * 1000, // 1h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
