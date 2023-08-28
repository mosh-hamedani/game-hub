import { useQuery } from "react-query";
import { apiClient } from "../services/api-client";
import { Game } from "./useGames";

export const useGame = (slug: string) => {
    const url = `/games/${slug}`
    const generic = new apiClient<Game>(url)
    return useQuery({
        queryKey: [slug],
        queryFn: generic.getDetail,
    })
}