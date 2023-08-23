import platforms from "../data/platforms";
import { Platform, apiClient } from "../services/api-client";
import { useQuery } from "react-query";
import ms from "ms";

const apiClientInstance = new apiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClientInstance.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
