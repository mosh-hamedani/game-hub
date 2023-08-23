import platforms from "../data/platforms";
import { Platform, apiClient } from "../services/api-client";
import { useQuery } from "react-query";

const apiClientInstance = new apiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClientInstance.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
