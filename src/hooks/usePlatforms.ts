import platforms from "../data/platforms";
import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { FetchResponse , Platform} from "../services/api-client";



const usePlatforms = () => {
   return useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((resp) => resp.data);
    },
    staleTime: 1 * 60 * 1000 ,// 1 min
    initialData:{count:platforms.length , results:platforms}
  });
};

export default usePlatforms;
