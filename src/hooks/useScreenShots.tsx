import { useQuery } from "react-query";
import { apiClient } from "../services/api-client";

interface SS {
    id: number;
    image: string;
    height: number;
    width: number;
}

export const useScreenshot = (gameID: number) => {
    const generics = new apiClient<SS>(`games/${gameID}/screenshots`)
    return useQuery({
        queryKey: ['ss', gameID],
        queryFn: generics.getAll
    })
}